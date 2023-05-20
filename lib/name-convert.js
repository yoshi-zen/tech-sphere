export function nameConvert(name, more = '…') {
  let rev_name = ''
  let i = 0
  let cnt = 0

  while (cnt < 10) {
    if (!name[i]) {
      break
    }
    if (name[i].match(/^[^\x01-\x7E\xA1-\xDF]+$/)) {
      cnt += 2
    } else {
      cnt += 1
    }
    rev_name += name[i]
    i++
  }
  if (cnt >= 10 && name[i]) {
    rev_name += more
  }
  return rev_name
}
