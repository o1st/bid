const strategyReducer = strategy => {

  return {
    id: strategy.id,
    // authorId: strategy.authorId,
    author: strategy.author,
    name: strategy.name,
    tag: strategy.tag,
    infoHtml: strategy.infoHtml,
    descriptionHtml: strategy.descriptionHtml,
    pictureFormat: strategy.pictureFormat,
    pictureBase64: strategy.pictureBase64,
    toolDrawndown: strategy.toolDrawndown,
    // currencyId: strategy.currencyId,
    currency: strategy.currency,
    // minInvestProfileId: strategy.minInvestProfileId,
    minInvestProfile: strategy.minInvestProfile,
    subscriptionThreshold: strategy.subscriptionThreshold,
    estimatedDrawdown: strategy.estimatedDrawdown,
    estimatedProfit: strategy.estimatedProfit,
    // durationId: strategy.durationId,
    duration: strategy.duration,
    actualDrawdown: strategy.actualDrawdown,
    actualProfit: strategy.actualProfit,
    open: strategy.open,
    leverage: strategy.leverage,
    maxPositionWeight: strategy.maxPositionWeight,
    maxIndustryWeight: strategy.maxIndustryWeight,
    isAlgostrategy: strategy.isAlgostrategy,
    cpacity: strategy.cpacity,
    recommended: strategy.recommended,
    benchmarkComparison: strategy.benchmarkComparison,
    minInvestCalculation: strategy.minInvestCalculation,
    // benchmarkId: strategy.benchmarkId,
    benchmark: strategy.benchmark,
    startDate: strategy.startDate,
    showUnauthorizedWeights: strategy.showUnauthorizedWeights,
    services: strategy.services,
    markets: strategy.markets,
    tools: strategy.tools,
    positions: strategy.positions,
    // pLHistory: strategy.pLHistory,
    history: strategy.history,
    subscriptionThresholdRange: strategy.subscriptionThresholdRange,
    pnLRange: strategy.pnLRange,
    dDRange: strategy.dDRange,
  }
};

module.exports = strategyReducer;
