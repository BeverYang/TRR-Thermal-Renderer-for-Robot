# TRR：机器人操作温度仿真

[打开中文展示页](https://beveryang.github.io/TRR-Thermal-Renderer-for-Robot/)

TRR 是面向机器人操作的温度仿真器，模拟操作过程中物体和接触区域的升温、传热与冷却，并通过同步的可见光与热红外观测获取温度变化数据。

展示页按以下顺序介绍项目：

1. TRR 定义与工作流程。
2. 热工件接触、转移和冷却的完整示例。
3. 月面装配、复杂焊接、热风拆焊、隧道救援和轨道维修五段参考控制仿真。
4. 场景配置、交互运行与同步数据记录。
5. 可用领域、产品形式及论文中的方法验证。
6. 论文、代码、团队与后续方向。

页面中的温度伪彩图用于温度场可视化，不直接等同于某一型号热红外传感器的完整成像模型。五场景视频不是训练策略的实机评测，不同案例的温度范围以各自画面标注为准。

## 论文与引用

[阅读 TRR 论文](https://arxiv.org/html/2611.20792v1)

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

视频、封面及其派生关系见 [媒体清单](assets/demos/manifest.json)；原有图像与模型的作者版权不变。许可信息以项目仓库中实际发布的许可文件为准。
