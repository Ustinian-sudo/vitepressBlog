$.ajax({
    url: 'https://api.example.com/data',
    type: 'POST',
    data: {
        key1: 'value1',
        key2: 'value2'
    },
    dataType: 'json',
    beforeSend: function (xhr) {
        // 在请求发送之前可以设置自定义 HTTP 头
        xhr.setRequestHeader('Authorization', 'Bearer token');
    },
    success: function (response) {
        console.log('请求成功:', response);
    },
    error: function (xhr, status, error) {
        console.error('请求失败:', error);
    },
    complete: function (xhr, status) {
        console.log('请求完成');
    }
});