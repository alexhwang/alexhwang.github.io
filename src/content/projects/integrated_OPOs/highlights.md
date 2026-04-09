---
title: "Chip-based mid-infrared OPO sources"
order: 1
date: "2026-01-01"
image: "/chip_red_laser.jpg"
imageWidth: "60%"
---

Optical parametric oscillators (OPOs) are the most tunable and broadband type of laser source existing today. They're remarkably efficient at converting an input laser's wavelength in a flexible manner. My work has focused on integrating these devices onto photonic chips and designing them to produce bright, broadband mid-infrared radiation.

Why mid-infrared? Because (1) molecules are extremely sensitive to mid-infrared light, making lasers here useful for sensing, but (2) good mid-infrared lasers are very challenging to produce and not easy to come by.

**Demonstrating an integrated octave-spanning mid-infrared OPO and using it for methane spectroscopy:** [_Optica_, *10*, 1535 (2023)](https://doi.org/10.1364/OPTICA.502487) / [arXiv:2307.04199](https://arxiv.org/pdf/2307.04199).  The main reason this is significant: in an OPO, generating emission and _controlling_ the emission are two completely different stories. OPOs can be notoriously tricky to operate because they involve multiple waves, resonances, high powers, and nonlinearity. By engineering the architecture properly (in what's referred to as a "singly-resonant" cavity), we are able to control the emission well enough to tune over narrow gas lines. Actually doing the tuning wasn't too hard -- the most difficult part was calibrating the wavelength axis of the narrow gas peak precisely enough without a mid-infrared wavemeter!

**Realizing a broadband electrically-tunable integrated OPO**: [arXiv:2604.06673](https://arxiv.org/pdf/2604.06673). Though integrated OPOs can tune over remarkably broad ranges, typically this requires a widely-tunable pump, large temperature control (many ten of Celsius), and/or multiple devices interfaced on a chip, which limits the benefits of chip integration. Here, we realized broad tunability completely through on-chip electrical controls by learning from the successful architectures of near-infrared tunable lasers. This means our device can tune over tens of THz in the mid-infrared with a completely fixed-wavelength 1-μm pump, which is really exciting for applications demanding low-cost, scalable, and compact systems featuring integrated OPOs.

More exciting results coming soon :)