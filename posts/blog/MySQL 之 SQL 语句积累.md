---
author: Ustinian
title: MySQL 之 SQL 语句积累
description: MySQL 之 SQL 语句积累
date: 2024-08-15
tags:
  - SQL
---

## 简介

随着 `ORM` 框架的不断升级和完善，原生 SQL 语句的编写越来越少，但是，为了应对一些复杂的需求，还是需要掌握一些的 SQL 语句，本文记录一下笔者在开发中经常用到的一些 SQL 语句。

## 目录

### 1. 更新插入

当我们在做一些同步数据的操作的时候，会遇到这样一种情况：当数据不存在时，插入数据；当数据存在时，更新数据，这种情况下，可以使用 `INSERT INTO ... ON DUPLICATE KEY UPDATE` 语句来实现更新插入的需求。

> 注：在执行 `INSERT INTO ... ON DUPLICATE KEY UPDATE` 语句时，需要保证`插入的字段`其中之一是主键或者唯一索引。否则会被视为新数据，只执行插入，不执行更新。

```sql
INSERT INTO table_name (column1, column2, column3, ...) VALUES (value1, value2, value3, ...),
(value4, value5, value6, ...) ...
ON DUPLICATE KEY UPDATE
column1 = values(column1),
column2 = values(column2),
column3 = values(column3) ...;
```

### 2. 数据固定时，指定值的优先级进行排序

当数据的值固定时，可以使用 FILED 函数指定值的优先级进行排序

```sql
SELECT * FROM table_name ORDER BY FIELD(priority, '高', '中', '低', '') DESC;
```

- `FIELD(priority, '高', '中', '低', '')`：priority 字段值在列表中的位置，确保按照 “高” > “中” > “低” > “” 的顺序排列，若 priority 字段值为其它值，则会按照列表顺序排在最后。
- `DESC`：指定结果集的排序方式为降序。

### 3. 巧用内置函数实现自定义排序

当需要对一些数据进行自定义的排序时，可以使用一些内置函数来实现，例如：对下列数据继续排序，要求先根据前面的字母进行排序，再根据后面的数字进行排序。
IPG-15478
DEV-144
IPG-35787
TEST-16723
IPG-25478
IPG-8778

```sql
# LEFT：函数返回指定长度的字符串的左侧部分，INSTR：返回字符串中子字符串第一次出现的位置
# CAST：将数据类型转换为无符号类型，SUBSTR：截取字符串
ORDER BY LEFT(table_name, INSTR(table_name, '-') - 1) desc, CAST(SUBSTR(table_name, INSTR(table_name, '-') + 1) AS UNSIGNED) desc
```
