
export async function getDataPopularContestsAPI () {
  // TODO сделать полнценный запрос
  const dataQuery = new FormData()
  dataQuery.append('search', window.location.search);
  return [
    {
      dateEndContest: '2020-04-22',
      titleContest: 'Contest 1',
      contestBanner:'https://news.liga.net/images/general/2019/09/11/20190911154809-5288.jpg?v=1568211325',
      countParticipants: 1443,
    },
    {
      dateEndContest: '2020-04-22',
      titleContest: 'Contest 2',
      contestBanner:'https://news.liga.net/images/general/2019/09/11/20190911154809-5288.jpg?v=1568211325',
      countParticipants: 443,
    },
    {
      dateEndContest: '2020-04-22',
      titleContest: 'Contest 3',
      contestBanner:'https://news.liga.net/images/general/2019/09/11/20190911154809-5288.jpg?v=1568211325',
      countParticipants: 765,
    },
  ]
}
