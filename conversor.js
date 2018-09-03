function convertToRoman(num) {
    let str = num.toString();
    let newStr = "";
    let counter1 = 0;
    let counter2 = 0;
    let counter3 = 0;

    if(num >= 1000){
        for(let i = 0; i < str[0]; i++){
            newStr += "M";
        }
        num = num % 1000;
        counter1++;
    }

    if(num >= 100){
        if(num < 400){
            if(counter1 > 0){
                for(let j = 0; j < str[1]; j++){
                    newStr += "C";
                }
                num = num % 100;
                counter1++;
            } else{
                for(let k = 0; k < str[0]; k++){
                    newStr += "C";
                }
                num = num % 100;
                counter2++;
            }
        } else if(num >= 400 && num < 500){
            if(counter1 > 0){
                newStr += "CD";
                num = num % 100;
                counter1++;
            } else{
                newStr += "CD";
                num = num % 100;
                counter2++;
            }
        } else if(num >= 500 && num < 600){
            if(counter1 > 0){
                newStr += "D";
                num = num % 100;
                counter1++;
            } else{
                newStr += "D";
                num = num % 100;
                counter2++;
            }
        } else if(num >= 600 && num < 900){
            newStr += "D";
            if(counter1 > 0){
                for(let l = 0; l < str[1] - 5; l++){
                    newStr += "C";
                }
                num = num % 100;
                counter1++;
            } else{
                for(let m = 0; m < str[0] - 5; m++){
                    newStr += "C";
                }
                num = num % 100;
                counter2++;
            }
        } else if(num >= 900){
            if(counter1 > 0){
                newStr += "CM";
                num = num % 100;
                counter1++;
            } else{
                newStr += "CM";
                num = num % 100;
                counter2++;
            }
        }
    }
    if(num >= 10){
        if(num < 40){
            if(counter1 > 0){
                for(let n = 0; n < str[2]; n++){
                    newStr += "X";
                }
                num = num % 10;
                counter1++;
            } else if(counter2 > 0){
                for(let o = 0; o < str[1]; o++){
                    newStr += "X";
                }
                num = num % 10;
                counter2++;
            } else{
                for(let p = 0; p < str[0]; p++){
                    newStr += "X";
                }
                num = num % 10;
                counter3++;
            }
        } else if(num >= 40 && num < 50){
            if(counter1 > 0){
                newStr += "XL";
                num = num % 10;
                counter1++;
            } else if(counter2 > 0){
                newStr += "XL";
                num = num % 10;
                counter2++;
            } else{
                newStr += "XL";
                num = num % 10;
                counter3++;
            }
        } else if(num >= 50 && num < 60){
            if(counter1 > 0){
                newStr += "L";
                num = num % 10;
                counter1++;
            } else if(counter2 > 0){
                newStr += "L";
                num = num % 10;
                counter2++;
            } else{
                newStr += "L";
                num = num % 10;
                counter3++;
            }
        } else if(num >= 60 && num < 90){
            newStr += "L";
            if(counter1 > 0){
                for(let q = 0; q < str[2] - 5; q++){
                    newStr += "X";
                }
                num = num % 10;
                counter1++;
            } else if(counter2 > 0){
                for(let r = 0; r < str[1] - 5; r++){
                    newStr += "X";
                }
                num = num % 10;
                counter2++;
            } else{
                for(let s = 0; s < str[0] - 5; s++){
                    newStr += "X";
                }
                num = num % 10;
                counter3++;
            }
        } else if(num >= 90){
            if(counter1 > 0){
                newStr += "XC";
                num = num % 10;
                counter1++;
            } else if(counter2 > 0){
                newStr += "XC";
                num = num % 10;
                counter2++;
            } else{
                newStr += "XC";
                num = num % 10;
                counter3++;
            }
        }
    }
    if(num < 4){
        if(counter1 > 0){
            for(let t = 0; t < str[3]; t++){
                newStr += "I";
            }
        } else if(counter2 > 0){
            for(let u = 0; u < str[2]; u++){
                newStr += "I";
            }
        } else if(counter3 == 1){
            for(let v = 0; v < str[1]; v++){
                newStr += "I";
            }
        } else{
            for(let w = 0; w < str[0]; w++){
                newStr += "I";
            }
        }
    } else if(num == 4){
        if(counter1 > 0){
            newStr += "IV";
        } else if(counter2 > 0){
            newStr += "IV";
        } else if(counter3 == 1){
            newStr += "IV";
        } else{
            newStr += "IV";
        }
    } else if(num == 5){
        if(counter1 > 0){
            newStr += "V";
        } else if(counter2 > 0){
            newStr += "V";
        } else if(counter3 == 1){
            newStr += "V";
        } else{
            newStr += "V";
        }
    } else if(num > 5 && num < 9){
        newStr += "V";
        if(counter1 > 0){
            for(let x = 0; x < str[3] - 5; x++){
                newStr += "I";
            }
        } else if(counter2 > 0){
            for(let y = 0; y < str[2] - 5; y++){
                newStr += "I";
            }
        } else if(counter3 == 1){
            for(let z = 0; z < str[1] - 5; z++){
                newStr += "I";
            }
        } else{
            for(let a = 0; a < str[0] - 5; a++){
                newStr += "I";
            }
        }
    } else if(num >= 9){
        if(counter1 > 0){
            newStr += "IX";
        } else if(counter2 > 0){
            newStr += "IX";
        } else if(counter3 == 1){
            newStr += "IX";
        } else{
            newStr += "IX";
        }
    }
    return newStr;
}
