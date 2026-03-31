function status(request, response) {
  response.status(200).json({ chave: "testando api" });
}

export default status;
