export default defineEventHandler(event => {
  // /newsletter にアクセスしたら、リダイレクトする
  return sendRedirect(event, 'my-new-domain.com', 302)
})
