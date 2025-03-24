// cloudflare worker
export interface Env {
	DB: D1Database;
}

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const { pathname, searchParams } = new URL(request.url)
		if(pathname == '/api/queryCustomers') {
			const CompanyNames = searchParams.get('CompanyName')
			const {results} = await env.DB.prepare('SELECT * FROM Customers WHERE CompanyName like ?1').bind(`%${CompanyNames}%`).all()
			if(results) {
				// const {results} = await env.DB.prepare('SELECT * FROM Customers').all()
				// 动态模糊匹配、当传入的参数是个数组时怎么查询 in (x,x,x)
				// const {results} = await env.DB.prepare('SELECT * FROM Customers WHERE CustomerId in (?1,?2) and CompanyName like ?3').bind(1,3,`%${searchParams.get('CompanyName')}%`).all()
				// console.log("res", results)
				return new Response(JSON.stringify(results))
			}
			return new Response("查询失败")
		}
		return new Response("查询失败")
	},
} satisfies ExportedHandler<Env>;
