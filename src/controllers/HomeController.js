class HomeController {
  async index(req, res) {
    res.json({
      tudocerto: 'okay',
    });
  }
}

export default new HomeController();
