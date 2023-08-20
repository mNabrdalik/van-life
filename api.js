//to fetch data from server.js
export async function getVans() {
    const res = await fetch("/api/vans")
    // if something not work, show error
    if(!res.ok) {
        throw {
            message: "Failed to fetch vans data",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans

}