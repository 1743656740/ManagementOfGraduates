//jsonDate:将JSON数据导出给Excel表   参数类型为 JSON
//arr1:将JSON数据封装到哪个表头下面    参数类型为 数组
//arr2:JSON数据的属性               参数类型为 数组
function tableToExcel(jsonData,arr1,arr2){
    //生成excel表格的表头
    var head = "<tr>";
    for (var i = 0;i<arr1.length;i++){
        head = head + "<td>" + arr1[i] + "</td>" ;
    }
    head = head + "</tr>";
    var tbody="";//内容
    console.log(arr2);

    for (let item in jsonData) {
        tbody = tbody + "<tr>";
        for (var i = 0 ; i<arr2.length;i++){
            tbody = tbody + "<td>"+jsonData[item][arr2[i]]+ '\t' + "</td>" ;
        }
        tbody = tbody + "</tr>";
    }
    let str = head+tbody;//头部跟身体内容连接


    //Worksheet名
    let worksheet = 'Sheet1'
    let uri = 'data:application/vnd.ms-excel;base64,';

    //下载的表格模板数据
    let template = `<html xmlns:o="urn:schemas-microsoft-com:office:office"
                  xmlns:x="urn:schemas-microsoft-com:office:excel"
                  xmlns="http://www.w3.org/TR/REC-html40">
                  <head></head><body><table>${str}</table></body></html>`;
    //下载模板
    window.location.href = uri + base64(template)
}
//输出base64编码
function base64 (s) { return window.btoa(unescape(encodeURIComponent(s))) }