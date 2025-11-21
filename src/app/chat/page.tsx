"use client";

import { useChat } from "@ai-sdk/react";
import { useState, useRef, useEffect } from 'react';
import Inputarea from '../component/Inputarea';
import Codeblock from "../component/Codeblock";
import { useApp } from "@/context/AppContext";
import { getFileIcon, formatFileSize } from "../component/Codeblock";
import { processpdfFile } from "../upload/actions";

export default function ChatPage() {
  const { messages, sendMessage, status, error, stop } = useChat();
  const [msg, setMessages] = useState<any[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { isDarkMode, clearChatSignal } = useApp();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [showError, setShowError] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<any[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Sync messages from useChat hook
  useEffect(() => {
    setMessages(
      messages.map((m: any) => ({
        id: m.id,
        text: m.parts?.find((p: any) => p.type === "text")?.text || m.content || "",
        files: m.parts?.filter((p: any) => p.type === "file").map((f: any) => f.file) || [],
        isUser: m.role === "user",
        timestamp: new Date(m.createdAt || Date.now()),
      }))
    );
  }, [messages]);

  // Error display handling
  useEffect(() => {
    if (error) {
      setShowError(true);
      const timer = setTimeout(() => {
        setShowError(false);
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  // Clear chat on signal
  useEffect(() => {
    if (clearChatSignal) {
      stop();
      setMessages([]);
      setInputMessage('');
      setSelectedFiles([]);
    }
  }, [clearChatSignal, stop]);

  // Auto-scroll to bottom
  useEffect(() => {
    scrollToBottom();
  }, [msg]);

  // Cleanup file previews on unmount
  useEffect(() => {
    return () => {
      msg.forEach(message => {
        if (message.filePreview) {
          message.filePreview.forEach((fp: any) => {
            URL.revokeObjectURL(fp.preview);
          });
        }
      });
    };
  }, [msg]);

  const handleSendMessage = async () => {
    const hasFiles = selectedFiles.length > 0;
    const hasMessage = inputMessage.trim();

    // Clear inputs immediately
    const messageCopy = inputMessage;
    const filesCopy = [...selectedFiles];
    setInputMessage("");
    setSelectedFiles([]);

    // ---- BOTH MESSAGE AND FILE ----
    if (hasFiles && hasMessage) {
      const file = filesCopy[0];

      // 1️⃣ Show user message with file preview
      const userMessage = {
        id: `user-${Date.now()}`,
        text: messageCopy,
        files: [file],
        isUser: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, userMessage]);

      // 2️⃣ Send text message via AI
      sendMessage({ text: messageCopy });

      // 3️⃣ Upload file in background
      setIsLoading(true);
      try {
        const formData = new FormData();
        formData.append("pdf", file);
        const result = await processpdfFile(formData);

        // Show success/error notification
        if (result.success) {
          setSuccessMessage(result.message || "PDF processed successfully!");
          setShowSuccess(true);
          setTimeout(() => setShowSuccess(false), 2000);
        } else {
          setShowError(true);
          setTimeout(() => setShowError(false), 2000);
        }
      } catch (err: any) {
        setShowError(true);
        setTimeout(() => setShowError(false), 2000);
      } finally {
        setIsLoading(false);
      }
      return;
    }

    // ---- ONLY FILE ----
    if (hasFiles) {
      const file = filesCopy[0];

      // Show user message with file preview
      const userMessage = {
        id: `user-${Date.now()}`,
        text: "",
        files: [],
        isUser: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, userMessage]);

      setIsLoading(true);
      try {
        const formData = new FormData();
        formData.append("pdf", file);
        const result = await processpdfFile(formData);

        // Show success notification first
        if (result.success) {
          setSuccessMessage(result.message || "PDF uploaded successfully!");
          setShowSuccess(true);
          setTimeout(() => setShowSuccess(false), 2000);

          // Then show AI response if there's content
          if (result.message && result.message !== "PDF uploaded successfully!") {
            // Wait a moment before showing AI response
            setTimeout(() => {
              const aiMessage = {
                id: `ai-${Date.now()}`,
                text: result.message,
                files: [],
                filePreview: [],
                isUser: false,
                timestamp: new Date(),
              };
              setMessages(prev => [...prev, aiMessage]);
            }, 500);
          }
        } else {
          // Show error message if failed
          const errorMessage = {
            id: `error-${Date.now()}`,
            text: `Error: ${result.error || "Failed to process PDF"}`,
            files: [],
            filePreview: [],
            isUser: false,
            timestamp: new Date(),
          };
          setMessages(prev => [...prev, errorMessage]);
          setShowError(true);
          setTimeout(() => setShowError(false), 2000);
        }
      } catch (err: any) {
        const errorMessage = {
          id: `error-${Date.now()}`,
          text: `Error uploading file: ${err.message || "Unknown error"}`,
          files: [],
          filePreview: [],
          isUser: false,
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, errorMessage]);
        setShowError(true);
        setTimeout(() => setShowError(false), 2000);
      } finally {
        setIsLoading(false);
      }
      return;
    }

    // ---- ONLY MESSAGE ----
    if (hasMessage) {
      sendMessage({ text: messageCopy });
    }
  };


  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className={`flex flex-col h-[calc(100vh-4.5rem)] transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'}`}>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6 w-full items-center mx-auto">

        {/* Error Notification */}
        {showError && (
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in bg-red-500 text-white px-6 py-3 rounded-lg shadow-2xl flex items-center space-x-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span className="font-medium">{error?.message || "Failed to process file"}</span>
          </div>
        )}

        {/* Success Notification */}
        {showSuccess && (
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in bg-green-500 text-white px-6 py-3 rounded-lg shadow-2xl flex items-center space-x-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-medium">{successMessage}</span>
          </div>
        )}

        {msg.map((message) => (
          <div key={message.id} className={`flex items-start space-x-3 animate-fade-in ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}> 
            {/* Avatar */}
            <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xs font-semibold shadow-md transition-transform hover:scale-110 ${message.isUser ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'}`}>
              {message.isUser ? '👤' : '🤖'}
            </div>

            {/* Message Content */}
            <div className={`max-w-[80%] ${message.isUser ? 'text-right' : ''}`}>
              <div className={`inline-block px-5 py-3 rounded-2xl shadow-md transition-all hover:shadow-lg ${message.isUser ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-none' : isDarkMode ? 'bg-gray-800 border border-gray-700 text-gray-100 rounded-bl-none' : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none'}`}>
                {/* FILES */}
                {message.files && message.files.length > 0 && (
                  <div className="mb-3 space-y-2">
                    {message.files.map((file: File, i: number) => (
                      <div key={i} className={`flex items-center px-3 py-2 rounded-lg border ${isDarkMode ? "bg-gray-700 border-gray-600 text-gray-200" : "bg-gray-100 border-gray-300 text-gray-800"}`} >
                        <span>{getFileIcon(file)}</span>
                        <div className="ml-2 flex flex-col">
                          <span className="text-xs font-medium truncate">{file.name}</span>
                          <span className="text-xs opacity-60">{formatFileSize(file.size)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <Codeblock text={message.text} isDarkMode={isDarkMode} />
              </div>
              <div className={`text-xs mt-1.5 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'} ${message.isUser ? 'text-right' : ''}`}>
                {formatTime(message.timestamp)}
              </div>
            </div>
          </div>
        ))}
        
        {/* Loading Indicator */}
        {(status === "submitted"|| status === "streaming" || isLoading) && (
          <div className="flex items-start space-x-3 animate-fade-in">
            <div className="shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-xs font-semibold text-white shadow-md">
              🤖
            </div>
            <div className={`rounded-2xl rounded-bl-none px-5 py-4 shadow-md ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
              <div className="flex items-center space-x-3">
                {isLoading && (
                  <div className={`flex items-center space-x-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span className="text-sm">Uploading file...</span>
                  </div>
                )}
                {status === "submitted" || status === "streaming" && !isLoading && (
                  <div className="flex space-x-1.5">
                    <div className={`w-2.5 h-2.5 rounded-full animate-bounce ${isDarkMode ? 'bg-gray-500' : 'bg-gray-400'}`}></div>
                    <div className={`w-2.5 h-2.5 rounded-full animate-bounce ${isDarkMode ? 'bg-gray-500' : 'bg-gray-400'}`} style={{ animationDelay: '0.1s' }}></div>
                    <div className={`w-2.5 h-2.5 rounded-full animate-bounce ${isDarkMode ? 'bg-gray-500' : 'bg-gray-400'}`} style={{ animationDelay: '0.2s' }}></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {msg.length === 0 && (
          <div className="flex flex-col items-center justify-center h-[60vh] px-4">
            <div className="relative mb-8">
              <div className={`w-24 h-24 rounded-2xl flex items-center justify-center shadow-2xl ${isDarkMode ? 'bg-gradient-to-br from-blue-600 to-purple-700 shadow-blue-500/20' : 'bg-gradient-to-br from-blue-500 to-purple-600 shadow-blue-500/30'}`}>
                <div className="text-3xl">🤖</div>
              </div>
              <div className={`absolute inset-0 rounded-2xl ${isDarkMode ? 'bg-blue-500/20' : 'bg-blue-400/20'} animate-ping`}></div>
            </div>

            <div className="text-center mb-12">
              <h1 className={`text-4xl font-bold mb-4 bg-gradient-to-r ${isDarkMode ? 'from-blue-400 to-purple-400' : 'from-blue-600 to-purple-600'} bg-clip-text text-transparent`}>Welcome to AI Assistant</h1>
              <p className={`text-lg max-w-md mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Your intelligent companion for answers, ideas, and creative solutions</p>
            </div>

            <div className="fixed top-1/4 left-1/4 opacity-10">
              <div className={`w-8 h-8 rounded-full ${isDarkMode ? 'bg-blue-400' : 'bg-blue-500'} animate-bounce`}></div>
            </div>
            <div className="fixed bottom-1/3 right-1/4 opacity-10">
              <div className={`w-6 h-6 rounded-full ${isDarkMode ? 'bg-purple-400' : 'bg-purple-500'} animate-bounce`} style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        )}  
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <Inputarea  
        isDarkMode={isDarkMode}  
        setInputMessage={setInputMessage}  
        inputMessage={inputMessage}  
        selectedFiles={selectedFiles}  
        setSelectedFiles={setSelectedFiles}
        handleKeyPress={handleKeyPress}  
        handleSendMessage={handleSendMessage}  
        status={status}  
        stop={stop}  
        isLoading={isLoading} 
      />
    </div>
  );
}