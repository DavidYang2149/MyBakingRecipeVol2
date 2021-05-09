Feature('App');

Scenario('메인 페이지를 확인합니다.', ({ I }) => {
  I.amOnPage('/');

  I.see('My Baking Recipe');
});
