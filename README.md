# TRR：机器人热交互仿真与 RGBT 数据

[打开中文展示页](https://beveryang.github.io/TRR-Thermal-Renderer-for-Robot/)

面向工况变化下的精细操作，模拟接触传热，生成同步 RGBT 观测，检查任务结果。

- **RGBT 仿真器**：高保真物理仿真的热学组成部分。
- **数据生成与评估管线**：工业级数据平台的组成部分。

新增月面装配、复杂焊接、热风拆焊、电路板检修、轨道维修五段演示，见展示页。视频为参考控制演示，不代表训练策略的实机表现。当前为组件级研究实现，工艺参数需实测标定。

需求背景：[《面向柔性制造的具身智能综述》§5.2](https://arxiv.org/abs/2602.06966)。该综述提出的未来方向不构成对 TRR 的验证或背书。

## 研究证据

论文基准为6项任务、2,224组条件对、4,448条轨迹，与新增场景分别统计。实验详情见[TRR预印本](https://arxiv.org/html/2611.20792v1)及中文展示页。

## 引用

```bibtex
@misc{yang_trr,
  title  = {TRR: A Thermal Interaction Engine for Robot Simulation and RGBT Data Generation},
  author = {Yang, Biwen and Cao, Zhe and Zhang, Jin and Sun, Haoyang and Hu, Zonglu and Zhao, Jintao and Zhang, Zhehao and Chen, Kaizheng and Liu, Chengyi and Wei, Chengyu and Wu, Siyuan and Zhang, Ruiheng},
  year   = {2026},
  url    = {https://github.com/BeverYang/TRR-Thermal-Renderer-for-Robot},
  note   = {Preprint: \url{https://arxiv.org/html/2611.20792v1}}
}
```

## 许可与来源

视频与模型来源见 [媒体清单](assets/demos/manifest.json)；原有图像与模型的作者版权不变。
