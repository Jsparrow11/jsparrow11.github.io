<template>
  <div class="chat-bot">
    <beautiful-chat
      :participants="participants"
      :titleImageUrl="titleImageUrl"
      :onMessageWasSent="onMessageWasSent"
      :messageList="messageList"
      :newMessagesCount="newMessagesCount"
      :isOpen="isChatOpen"
      :close="closeChat"
      :icons="icons"
      :open="openChat"
      :showEmoji="true"
      :showFile="false"
      :showTypingIndicator="showTypingIndicator"
      :colors="colors"
      :alwaysScrollToBottom="alwaysScrollToBottom"
      :messageStyling="messageStyling"
      @onType="handleOnType"
      @edit="editMessage" />
  </div>
</template>

<script>
import CloseIcon from 'vue-beautiful-chat/src/assets/close-icon.png'
import OpenIcon from 'vue-beautiful-chat/src/assets/logo-no-bg.svg'
import FileIcon from 'vue-beautiful-chat/src/assets/file.svg'
import CloseIconSvg from 'vue-beautiful-chat/src/assets/close.svg'


export default {
    data() {
    return {
      db: require('../../beautifulchat.js'),
      icons:{
        open:{
          img: OpenIcon,
          name: 'default',
        },
        close:{
          img: CloseIcon,
          name: 'default',
        },
        file:{
          img: FileIcon,
          name: 'default',
        },
        closeSvg:{
          img: CloseIconSvg,
          name: 'default',
        },
      },
      participants: [
        {
          id: 'support',
          name: 'jSparrow',
          imageUrl: 'logo.png'
        }
      ], // the list of all the participant of the conversation. `name` is the user name, `id` is used to establish the author of a message, `imageUrl` is supposed to be the user avatar.
      titleImageUrl: '',
      messageList: [
          { 
            type: 'text', author: `support`, 
            data: { text: `Hey there! May I help you? 😊` }, 
            suggestions: [
              'What is jSparrow?', 
              'What are the benefits?', 
              'I have a suggestion', 
              'I want to report a bug.',
              'I\'m just having a look.'] 
            },
      ], // the list of the messages to show, can be paginated and adjusted dynamically
      newMessagesCount: 1,
      isChatOpen: false, // to determine whether the chat window should be open or closed
      showTypingIndicator: '', // when set to a value matching the participant.id it shows the typing indicator for the specific user
      responseTimeout: 700,
      defaultIntentKey: 'default',
      colors: {
        header: {
          bg: '#4e8cff',
          text: '#ffffff'
        },
        launcher: {
          bg: '#4e8cff'
        },
        messageList: {
          bg: '#ffffff'
        },
        sentMessage: {
          bg: '#4e8cff',
          text: '#ffffff'
        },
        receivedMessage: {
          bg: '#eaeaea',
          text: '#222222'
        },
        userInput: {
          bg: '#f4f7f9',
          text: '#565867'
        }
      }, // specifies the color scheme for the component
      isReply: false,
      alwaysScrollToBottom: true, // when set to true always scrolls the chat to the bottom when new events are in (new message, user starts typing...)
      messageStyling: true // enables *bold* /emph/ _underline_ and such (more info at github.com/mattezza/msgdown)
    }
  },
  methods: {
    sendMessage (text) {
      if (text.length > 0) {
        this.newMessagesCount = this.isChatOpen ? this.newMessagesCount : this.newMessagesCount + 1
        var answer = this.findAnswer(text)
        var nextSuggestions = this.findNextSuggestions(text)
        
        this.onMessageWasSent({ author: 'support', type: 'text', data: { text: answer }, suggestions: nextSuggestions })
      }
    },
    onMessageWasSent (message) {
      // called when the user sends a message
      this.messageList = [ ...this.messageList, message ]
      var choice = message.data.text
      console.log(choice)
      if(this.isReply) {
        this.isReply = false
        return
      }
      this.showTypingIndicator = 'support'
      this.isReply = true

      //this.findReplyKey(choice)
      var key = this.findChoiceKey(choice)
      setTimeout(() => {
        this.sendMessage(key);
        this.showTypingIndicator = ''
        }, this.responseTimeout);
      
    },
    findChoiceKey(choice) {
      for(let[key, questionObject] of Object.entries(this.db)) {
        if(questionObject.questions.includes(choice)) {
          return key;
        }
      }
      return this.defaultIntentKey
    },
    findAnswer(key) {
      var questionObject = this.db[key]
      var answer = questionObject.answers[Math.floor(Math.random() * questionObject.answers.length)]
      return answer
    },
    findNextSuggestions(key) {
      var questionObject = this.db[key]
      var nextSuggestions = questionObject.nextSuggestions.map(suggestionKey => this.db[suggestionKey].questions[0]) 
      return nextSuggestions
    },
    openChat () {
      // called when the user clicks on the fab button to open the chat
      this.isChatOpen = true
      this.newMessagesCount = 0
    },
    closeChat () {
      // called when the user clicks on the botton to close the chat
      this.isChatOpen = false
    },
    handleScrollToTop () {
      // called when the user scrolls message list to top
      // leverage pagination for loading another page of messages
  	},
    handleOnType () {
      console.log('Emit typing event')
    },
    editMessage(message){
      const m = this.messageList.find(m=>m.id === message.id);
      m.isEdited = true;
      m.data.text = message.data.text;
    }
  }
}
</script>

<style>
.sc-launcher {
  bottom: 55px !important;
}

.sc-launcher .sc-open-icon {
  bottom: 55px !important;
}

.sc-launcher .sc-closed-icon {
  bottom: 55px !important;
}
</style>