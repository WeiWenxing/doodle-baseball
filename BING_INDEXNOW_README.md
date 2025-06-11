# Bing IndexNow 快速提交指南

## 1. 生成密钥

1. 访问 [Bing IndexNow 入门页面](https://www.bing.com/indexnow/getstarted#)
2. 生成密钥并下载密钥文件
3. 将密钥文件上传到网站根目录

## 2. 提交 URL (curl 命令)

```bash
curl -X POST "https://www.bing.com/IndexNow" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d '{
    "host": "doodle-baseball.net",
    "key": "<key>",
    "keyLocation": "https://doodle-baseball.net/<key>.txt",
    "urlList": [
      "https://doodle-baseball.net/",
      "https://doodle-baseball.net/doodle-baseball",
      "https://doodle-baseball.net/drift-boss"
    ]
  }'
```

添加 `-v` 参数可查看详细响应：

```bash
curl -v -X POST "https://www.bing.com/IndexNow" ...
```
