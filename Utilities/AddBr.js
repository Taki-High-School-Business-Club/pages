function AddBr(sen){
    const spIn = sen.split("\n");
    const spIn_len = spIn.length;
    console.log(spIn_len);
    let output = "";
    for (let i = 0; i < spIn_len - 1; ++i) {
      output += spIn[i] + "<br>";
    }
    output += spIn[spIn_len - 1];
    return output;
  }