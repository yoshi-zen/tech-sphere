export function nameConvert(name, more = '…') {
  if (name.length >= 7) {
    return name.slice(0, 6) + more
  } else {
    return name
  }
}
