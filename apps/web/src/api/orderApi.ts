const orderApi = {
  /**
   * 주문을 생성하는 API
   * @param params
   */
  createOrder: (params: {
    userId: number;
    price: number;
    productId: number;
    productVersionId: number;
  }) => ({
    url: '/order',
    params,
  }),
};

export default orderApi;
