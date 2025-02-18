class HomeController {
  async index(req, res) {
    res.json('Index/home');
  }
}

export default new HomeController();
