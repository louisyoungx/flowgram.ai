import 'server-only';

export const main = async () => {
  console.log('hello world');
  // 在这里添加您的服务器端逻辑
  return {
    timestamp: new Date().toISOString(),
    message: 'Server processing completed',
  };
};
