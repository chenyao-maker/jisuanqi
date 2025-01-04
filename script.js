function calculateAverage() {
    // 获取所有输入框的元素
    const inputs = document.querySelectorAll('#numberInputs .input-field input[type="number"]');
    let sum = 0;
    let count = 0;
    
    // 遍历所有输入框，计算总和和数量
    inputs.forEach(input => {
        const value = parseFloat(input.value);
        if (!isNaN(value)) { // 检查输入是否为有效的数字
            sum += value;
            count++;
        }
    });
    
    // 计算平均值
    const average = count > 0 ? sum / count : 0;
    
    // 显示结果
    const resultElement = document.getElementById('result');
    resultElement.textContent = `你输入的7个数的平均值是: ${average.toFixed(2)}`;
}