export function getURLLoadFile(files, type) {
  let types
  switch (type) {
    case 'banner':
      types = ['z', 'y', 'x', 'm', 's']
      break
    case 'icon':
      types = ['s']
      break
    case 'backgroundStory':
      types = ['y', 'x', 'm', 's']
      break
    case 'backgroundPublicWall':
      const { owner_id, id } = files[0]
      return 'photo' + owner_id + '_' + id
    default:
      types = []
  }
  for (let type of types) {
    for (let file of files[0].sizes) {
      if (file.type === type) return file.url
    }
  }
  return files.length > 0 ? files[0].url : false
}
