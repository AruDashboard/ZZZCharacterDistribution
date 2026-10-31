# 绝区零角色分布

绝区零角色按元素、命途的分布情况。

## 本地开发

```sh
npm install
npm run dev
```

裁剪字体（发布时会自动裁剪，这个只用于本地预览）：

```sh
npm run predev
```

## 维护数据

编辑 `src/data/characters.ts`，格式如下：

```js
{ name: '雅', element: '烈霜', specialty: '异常', rank: 5, image: '雅.avif' }
```

图像放到 `public/images/characters/`，必须使用`.avif`格式。
