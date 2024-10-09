<?php

public function quick_response()
{
    // 立即返回成功响应
    $response = [
        'status' => 'success',
        'message' => 'Task has been received and will be processed shortly.'
    ];
    echo json_encode($response);
    $url = "http://example.com/task.php";
    // 后台执行延迟任务
    $this->http_request($url);
}

public function http_request($url)
{
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_TIMEOUT_MS, 600);  // 600ms后超时
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);

    // 任务处理逻辑
    ..........

    // 关闭cURL资源
    curl_close($ch);
}
