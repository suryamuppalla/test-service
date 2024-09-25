import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

const GenericChat = () => {
  const [messages, setMessages] = useState<any>([]);  // Chat messages array
  const [messageText, setMessageText] = useState('');  // Input text for the new message

  // Function to handle sending a message
  const handleSendMessage = () => {
    if (messageText.trim()) {
      setMessages([...messages, { id: messages.length.toString(), text: messageText }]);
      setMessageText('');  // Clear the input after sending the message
    }
  };

  // Function to handle mic press (Placeholder for future voice functionality)
  const handleMicPress = () => {
    console.log('Mic Pressed');  // Placeholder action
  };

  return (
    <View style={styles.container}>
      {/* Chat messages list */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.message}>
            <Text>{item.text}</Text>
          </View>
        )}
        style={styles.chatList}
      />

      {/* Message input, mic icon, and send button */}
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={100}>
        <View style={styles.inputContainer}>
          {/* Mic Icon */}
          <TouchableOpacity style={styles.micButton} onPress={handleMicPress}>
            <FontAwesome name="microphone" size={24} color="#007bff" />
          </TouchableOpacity>

          {/* Text Input */}
          <TextInput
            style={styles.textInput}
            placeholder="Type a message..."
            value={messageText}
            onChangeText={setMessageText}
          />

          {/* Send Button */}
          <Button title="Send" onPress={handleSendMessage} />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default GenericChat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    padding: 10,
    backgroundColor: '#f8f8f8',
    alignItems: 'flex-end',
  },
  newChatButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  newChatButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  chatList: {
    flex: 1,
    padding: 10,
  },
  message: {
    padding: 10,
    backgroundColor: '#e1f7d5',
    marginBottom: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  micButton: {
    marginRight: 10,
  },
});
