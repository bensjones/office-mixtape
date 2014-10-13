if (Songs.find().count() === 0) {
  Songs.insert({
    title: 'test song 1',
    recommendedBy: 'test user 1',
    url: '//www.youtube.com/embed/M-2lMstw6qs'
  });

  Songs.insert({
    title: 'test song 2',
    recommendedBy: 'test user 2',
    url: '//www.youtube.com/embed/m9IQcztUMlo'
  });

  Songs.insert({
    title: 'test song 3',
    recommendedBy: 'test user 3',
    url: '//www.youtube.com/embed/6Kwz8OsVnlo'
  });
}