<!DOCTYPE html>
<html>
  <body>
    <form id="my-form">
      <label for="name">이름:</label>
      <input type="text" id="name" name="name" required />
      <button type="submit">제출</button>
    </form>

    <script>
      const form = document.querySelector('#my-form');

      form.addEventListener('submit', function (event) {
        event.preventDefault(); // 폼 제출 이벤트 중지
        alert('폼 제출 이벤트 중지');
      });
    </script>
  </body>
</html>