function fncBMI(){
    var bmi,w,h;
    w=eval(document.bmi.bmiWeight.value);
    h=eval(document.bmi.bmiHeight.value)/100;
    bmi=w
    alert('あなたのBMI値は'+bmi+'です');
    document.bmi.bmiAns.value=bmi;
}
