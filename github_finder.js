class GitHub{
	constructor(){
		this.client_id = '4085686248bc47aff4aa';
		this.client_secret = 'd54179ddead9aa8259db96553a78b0defe7b2038';
	}

	async getUser(user){
		const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
		
		const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?type=owner&sort=created&direction=asc&client_id=${this.client_id}&client_secret=${this.client_secret}`);
		
		const profile = await profileResponse.json();

		const repositories = await reposResponse.json();

		return {
			profile,
			repos:repositories,
		}
	}
}