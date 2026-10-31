# 崩坏：星穹铁道角色分布

崩坏：星穹铁道角色按元素、命途的分布情况。

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
{ name: '黄泉', element: '雷', path: '虚无', rank: 5, image: '黄泉.avif' }
```

图像放到 `public/images/characters/`，必须使用`.avif`格式。
