export class ApiCalls {

  private BASE_URL: string;

  constructor() {
    /* this.BASE_URL = "https://Context-Areas-Backend.apps1-fm-htz.icloud.intel.com"; */
    this.BASE_URL = "http://localhost:4000";
  }

  public async validateAdmin(username: string, password: string) {
    const response = await fetch(`${this.BASE_URL}/api/validateAdmin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password }),
      redirect: 'follow'
    });
    return await response.json();
  }

  public async addEmployee(data: any) {
    const response = await fetch(`${this.BASE_URL}/api/addEmployee`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
      redirect: 'follow'
    });
    return await response.json();
  }

  public async getEmployees() {
    const response = await fetch(`${this.BASE_URL}/api/getEmployees`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow'
    });
    return await response.json();
  }

  public async getEmployeeData(pin: string) {
    const response = await fetch(`${this.BASE_URL}/api/getEmployeeData`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ pin }),
      redirect: 'follow'
    });
    return await response.json();
  }

  public async modifyEmployee(pin: string, data: any) {
    const response = await fetch(`${this.BASE_URL}/api/modifyEmployee`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ pin, data }),
      redirect: 'follow'
    });
    return await response.json();
  }



}
