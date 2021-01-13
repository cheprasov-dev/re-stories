export const filterTopics = (idTopics, topics) => {
  let filteredTopics = topics.filter(x => idTopics.includes(Number(x.id)))
  return filteredTopics.map((topic, index) => {
    const lengthTopics = filteredTopics.length
    if (lengthTopics === 1) {
      topic.size = 'l'
      return topic
    } else if (lengthTopics === 2) {
      topic.size = 'm'
      return topic
    } else if (lengthTopics === 3) {
      if (index === 0) topic.size = 'l'
      if (index === 1) topic.size = 'm'
      if (index === 2) topic.size = 'm'
      return topic
    } else if (lengthTopics === 4) {
      if (index === 0) topic.size = 'l'
      if (index === 1) topic.size = 's'
      if (index === 2) topic.size = 's'
      if (index === 3) topic.size = 's'
      return topic
    } else if (lengthTopics === 5) {
      if (index === 0) topic.size = 'm'
      if (index === 1) topic.size = 'm'
      if (index === 2) topic.size = 's'
      if (index === 3) topic.size = 's'
      if (index === 4) topic.size = 's'
      return topic
    } else if (lengthTopics === 6) {
      if (index === 0) topic.size = 'm'
      if (index === 1) topic.size = 'm'
      if (index === 2) topic.size = 's'
      if (index === 3) topic.size = 's'
      if (index === 4) topic.size = 's'
      if (index === 5) topic.size = 'l'
      return topic
    } else if (lengthTopics === 7) {
      if (index === 0) topic.size = 'm'
      if (index === 1) topic.size = 'm'
      if (index === 2) topic.size = 's'
      if (index === 3) topic.size = 's'
      if (index === 4) topic.size = 's'
      if (index === 5) topic.size = 'm'
      if (index === 6) topic.size = 'm'
      return topic
    } else if (lengthTopics === 8) {
      if (index === 0) topic.size = 'm'
      if (index === 1) topic.size = 'm'
      if (index === 2) topic.size = 's'
      if (index === 3) topic.size = 's'
      if (index === 4) topic.size = 's'
      if (index === 5) topic.size = 'm'
      if (index === 6) topic.size = 'm'
      if (index === 7) topic.size = 'l'
      return topic
    } else if (lengthTopics === 9) {
      if (index === 0) topic.size = 'l'
      if (index === 1) topic.size = 'm'
      if (index === 2) topic.size = 'm'
      if (index === 3) topic.size = 's'
      if (index === 4) topic.size = 's'
      if (index === 5) topic.size = 's'
      if (index === 6) topic.size = 'm'
      if (index === 7) topic.size = 'm'
      if (index === 8) topic.size = 'l'
      return topic
    } else if (lengthTopics === 10) {
      if (index === 0) topic.size = 'm'
      if (index === 1) topic.size = 'm'
      if (index === 2) topic.size = 's'
      if (index === 3) topic.size = 's'
      if (index === 4) topic.size = 's'
      if (index === 5) topic.size = 'm'
      if (index === 6) topic.size = 'm'
      if (index === 7) topic.size = 's'
      if (index === 8) topic.size = 's'
      if (index === 9) topic.size = 's'
      return topic
    } else if (lengthTopics === 11) {
      if (index === 0) topic.size = 'm'
      if (index === 1) topic.size = 'm'
      if (index === 2) topic.size = 's'
      if (index === 3) topic.size = 's'
      if (index === 4) topic.size = 's'
      if (index === 5) topic.size = 'm'
      if (index === 6) topic.size = 'm'
      if (index === 7) topic.size = 's'
      if (index === 8) topic.size = 's'
      if (index === 9) topic.size = 's'
      if (index === 10) topic.size = 'l'
      return topic
    } else if (lengthTopics === 12) {
      if (index === 0) topic.size = 'm'
      if (index === 1) topic.size = 'm'
      if (index === 2) topic.size = 's'
      if (index === 3) topic.size = 's'
      if (index === 4) topic.size = 's'
      if (index === 5) topic.size = 'm'
      if (index === 6) topic.size = 'm'
      if (index === 7) topic.size = 's'
      if (index === 8) topic.size = 's'
      if (index === 9) topic.size = 's'
      if (index === 10) topic.size = 'm'
      if (index === 11) topic.size = 'm'
      return topic
    } else if (lengthTopics === 13) {
      if (index === 0) topic.size = 'm'
      if (index === 1) topic.size = 'm'
      if (index === 2) topic.size = 's'
      if (index === 3) topic.size = 's'
      if (index === 4) topic.size = 's'
      if (index === 5) topic.size = 'm'
      if (index === 6) topic.size = 'm'
      if (index === 7) topic.size = 's'
      if (index === 8) topic.size = 's'
      if (index === 9) topic.size = 's'
      if (index === 10) topic.size = 'm'
      if (index === 11) topic.size = 'm'
      if (index === 12) topic.size = 'l'
      return topic
    } else if (lengthTopics === 14) {
      if (index === 0) topic.size = 'l'
      if (index === 1) topic.size = 'm'
      if (index === 2) topic.size = 'm'
      if (index === 3) topic.size = 's'
      if (index === 4) topic.size = 's'
      if (index === 5) topic.size = 's'
      if (index === 6) topic.size = 'm'
      if (index === 7) topic.size = 'm'
      if (index === 8) topic.size = 's'
      if (index === 9) topic.size = 's'
      if (index === 10) topic.size = 's'
      if (index === 11) topic.size = 'm'
      if (index === 12) topic.size = 'm'
      if (index === 13) topic.size = 'l'
      return topic
    } else if (lengthTopics === 15) {
      if (index === 0) topic.size = 'm'
      if (index === 1) topic.size = 'm'
      if (index === 2) topic.size = 's'
      if (index === 3) topic.size = 's'
      if (index === 4) topic.size = 's'
      if (index === 5) topic.size = 'm'
      if (index === 6) topic.size = 'm'
      if (index === 7) topic.size = 's'
      if (index === 8) topic.size = 's'
      if (index === 9) topic.size = 's'
      if (index === 10) topic.size = 'm'
      if (index === 11) topic.size = 'm'
      if (index === 12) topic.size = 's'
      if (index === 13) topic.size = 's'
      if (index === 14) topic.size = 's'
      return topic
    }
  })
}
