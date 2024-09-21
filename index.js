let numbersArray = [];

// 
function addNumber() {
    const numberInput = document.getElementById("inputNumber").value;
    if (numberInput !== '') {
        numbersArray.push(Number(numberInput));
        document.getElementById("arrayDisplay").innerText = numbersArray.join(", ");
    }
}

// 1. 
function sumPositiveNumbers() {
    const sum = numbersArray.filter(num => num > 0).reduce((a, b) => a + b, 0);
    document.getElementById("result1").innerText = "Tổng số dương: " + sum;
}

// 2. 
function countPositiveNumbers() {
    const count = numbersArray.filter(num => num > 0).length;
    document.getElementById("result2").innerText = "Số dương: " + count;
}

// 3. 
function findSmallestNumber() {
    if (numbersArray.length > 0) {
        const min = Math.min(...numbersArray);
        document.getElementById("result3").innerText = "Số nhỏ nhất: " + min;
    } else {
        document.getElementById("result3").innerText = "Mảng trống.";
    }
}

// 4. 
function findSmallestPositiveNumber() {
    const positiveNumbers = numbersArray.filter(num => num > 0);
    if (positiveNumbers.length > 0) {
        const minPositive = Math.min(...positiveNumbers);
        document.getElementById("result4").innerText = "Số dương nhỏ nhất: " + minPositive;
    } else {
        document.getElementById("result4").innerText = "Không có số dương.";
    }
}

// 5. 
function findLastEvenNumber() {
    let lastEven = -1;  // 

    // 
    for (let i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] % 2 === 0) {  // 
            lastEven = numbersArray[i];  // 
        }
    }

    // 
    if (lastEven !== -1) {
        document.getElementById("result5").innerText = `Số chẵn cuối cùng: ${lastEven}`;
    } else {
        document.getElementById("result5").innerText = "-1 (Không có số chẵn)";
    }
}


// 6. 
function swapPositions() {
    const index1 = parseInt(document.getElementById("index1").value);
    const index2 = parseInt(document.getElementById("index2").value);

    // 
    if (isNaN(index1) || isNaN(index2)) {
        document.getElementById("result6").innerText = "Vui lòng nhập vào hai vị trí hợp lệ.";
        return;
    }

    if (index1 < 0 || index2 < 0 || index1 >= numbersArray.length || index2 >= numbersArray.length) {
        document.getElementById("result6").innerText = "Vị trí không hợp lệ. Hãy nhập các vị trí trong khoảng 0 đến " + (numbersArray.length - 1);
    } else {
        // 
        let temp = numbersArray[index1];  // 
        numbersArray[index1] = numbersArray[index2];  // 
        numbersArray[index2] = temp;  // 
        
        // 
        document.getElementById("result6").innerText = `Mảng sau khi đổi chỗ: ${numbersArray.join(", ")}`;
    }
}
 


// 7. 
function sortArray() {
    numbersArray.sort((a, b) => a - b);
    document.getElementById("result7").innerText = `Mảng sau khi sắp xếp: ${numbersArray.join(", ")}`;
}

// 8. 
function findFirstPrime() {
    function isPrime(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false; 
        }
        return true;
    }

    const firstPrime = numbersArray.find(num => isPrime(num));
    document.getElementById("result8").innerText = firstPrime !== undefined ? 
        `Số nguyên tố đầu tiên: ${firstPrime}` : 
        "-1 (Không có số nguyên tố)";
}

// 9. 
function countIntegersInRealArray() {
    const realArrayInput = document.getElementById("realArrayInput").value; 
    const realArray = realArrayInput.split(",").map(Number);
    const integerCount = realArray.filter(num => Number.isInteger(num)).length;

    document.getElementById("result9").innerText = `Số lượng số nguyên: ${integerCount}`;
}

// 10. 
function comparePositiveNegative() {
    const positiveCount = numbersArray.filter(num => num > 0).length;
    const negativeCount = numbersArray.filter(num => num < 0).length;

    if (positiveCount === 0 && negativeCount === 0) {
        document.getElementById("result10").innerText = "Mảng không có số dương và số âm.";
    } else if (positiveCount > negativeCount) {
        document.getElementById("result10").innerText = "Số lượng số dương nhiều hơn.";
    } else if (negativeCount > positiveCount) {
        document.getElementById("result10").innerText = "Số lượng số âm nhiều hơn.";
    } else {
        document.getElementById("result10").innerText = "Số lượng số dương và số âm bằng nhau.";
    } 
}
// 11. 
function comparePositiveNegative() {
    const positiveCount = numbersArray.filter(num => num > 0).length;
    const negativeCount = numbersArray.filter(num => num < 0).length;

    if (positiveCount === 0 && negativeCount === 0) {
        document.getElementById("result10").innerText = "Mảng không có số dương và số âm.";
    } else if (positiveCount > negativeCount) {
        document.getElementById("result10").innerText = "Số lượng số dương nhiều hơn.";
    } else if (negativeCount > positiveCount) {
        document.getElementById("result10").innerText = "Số lượng số âm nhiều hơn.";
    } else {
        document.getElementById("result10").innerText = "Số lượng số dương và số âm bằng nhau.";
    } 
}
 

