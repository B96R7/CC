// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.
function stringClean(s){
    const nums = "1234567890"
    let cleanStr = ""
  
    for (let i = 0; i < s.length; i++) {
      if (nums.includes(s[i])) continue
      else cleanStr += s[i]
    }
    
    return cleanStr
  }