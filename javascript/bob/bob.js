export const hey = (message) => {
  const trimMsg = message.trim()
  const lastChar = trimMsg.charAt(trimMsg.length -1)
  const isYelling = message.toUpperCase() === message 
  const isLetters = /[a-zA-Z]/.test(message)

  if (isYelling && isLetters) {
    if (lastChar === '?') {
      return 'Calm down, I know what I\'m doing!'
    }
    return 'Whoa, chill out!'
  }

  if (lastChar === '?') {
    return 'Sure.'
  }

  if (!message.match(/[a-zA-Z0-9]/i)) {
    return 'Fine. Be that way!'
  } 
  
  return 'Whatever.'
};  
