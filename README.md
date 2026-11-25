# TRR：机器人热交互仿真与 RGBT 数据

[打开中文展示页](https://beveryang.github.io/TRR-Thermal-Renderer-for-Robot/)

面向工况变化下的精细操作，模拟接触传热，生成同步 RGBT 观测，检查任务结果。

徐凯等《面向柔性制造的具身智能综述》将工业级数据平台与高性能高保真物理仿真器列为重要挑战。TRR 从热与接触切入，为两类基础设施提供可集成的组件。

- **热物理仿真模块**：模拟接触传热与热历史，为工艺调整和策略测试提供可复现环境。
- **数据生产与质量评测**：同步生成 RGB、温度、动作轨迹与任务结果，支持模型调优和策略验证。
- **模块化接入**：服务私有或定制场景，可接入现有工业数据平台与数采流程；跨企业共享、权限及隐私治理由接入平台承接。

新增月面装配、复杂焊接、热风拆焊、电路板检修、轨道维修五段演示，见展示页。

需求背景：[《面向柔性制造的具身智能综述》§5.2](https://arxiv.org/abs/2602.06966)。

## 下一步

从热交互出发，逐步加入更多物理、化学过程的仿真，扩展焊接、打磨、装配与维修等生产作业训练。

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

视频与模型来源见 [媒体清单](assets/demos/manifest.json)；原有图像与模型的作者版权不变。
