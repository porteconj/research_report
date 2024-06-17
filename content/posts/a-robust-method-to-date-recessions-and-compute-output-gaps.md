---
title: A robust method to date recessions and compute output gaps
date: 2024-06-17T19:50:58.126Z
categories:
  - Economic Growth
  - Business Fluctuations
---
This article discusses ways to estimate trends in economic series such as GDP, steady increases in the series over time. In most applications, filtering consists in applying a linear operator like the average to a moving-centered window of the data. A special case of moving average is the widely used Hodrick and Prescott (HP) filter. In this method, the trend is chosen to minimise the weighted sum of the squares of deviations from data and the sum of the squares of the trend’s second difference. The goal is to compute a smooth trend that fits the data.

![](https://ucarecdn.com/396c347b-d896-4764-ad5e-6457b23074d4/ "First difference of the trend component of 100 times the log of GDP computed with the linear time model, HP and MR filters (Portugal, 1977Q1-2023Q2).")

The HP filter may produce cyclical components whose dynamics are purely artefacts created by the filter rather than reflecting any true dynamics of the data-generating process itself. In fact, linear filters produce smooth trends that might not capture fundamental sharp changes in the growth component. Some economic shocks may affect both the trend growth and the cyclical position of an economy. Nonlinear filters can perform better than linear ones in capturing these occasional, discrete shifts in the growth dynamics of economic series. In particular, the Median (MED) filter provides a robust estimate against sudden impulses, but it produces a noisy trend. The nonlinear filter proposed by Mosheiov and Raveh (MR) can deal with this problem, producing a suggestive piecewise trend.

An application to the Portuguese relevant macroeconomic series (GDP, private consumption, investment and employment) confirms the robustness of nonlinear filters in signalling the recessions and recoveries. In particular, the MR filter estimates piecewise trend growth paths that naturally date those periods of the Portuguese economy since 1977 (see the figure).

[Click here to go to the paper by João B. Assunção and Pedro Afonso Fernandes.](https://link.springer.com/article/10.1007/s10258-024-00259-4)