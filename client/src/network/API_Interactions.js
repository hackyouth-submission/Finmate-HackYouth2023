async function getInfo(APIGate, id) {
  const response = await fetch(APIGate, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(id)
  })
  .then((response) => response.json)

  return response
}

async function getAllInfo(APIGate) {
  const infoData = await fetch(APIGate, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then((response) => response.json)
  .then((JSONResponse) => JSON.parse(JSONResponse))

  return infoData
}

async function updateInfo(APIGate, info) {
  const response = await fetch(APIGate, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info)
  })
  .then((response) => response.json)
  .then((JSONResponse) => JSON.parse(JSONResponse))

  return response
}

async function deleteInfo(APIGate, id) {
  const response = await fetch(APIGate, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(id)
  })
  .then((response) => response.json())
  .then((JSONResponse) => JSON.parse(JSONResponse))

  return response
}

async function getImage(APIGate, id) {
  const img = await fetch(APIGate, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(id)
  })
  .then((response) => response.blob())
  .then(imageBlob => URL.createObjectURL(imageBlob))

  return img
}

async function createInfo(APIGate, info) {
  const response = await fetch(APIGate, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info)
  })
  .then((response) => response.json)
  .then((JSONResponse) => JSON.parse(JSONResponse))

  return response
}

export { getInfo, getAllInfo , updateInfo, deleteInfo, getImage, createInfo };
