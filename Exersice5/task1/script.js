document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup');
    const signinForm = document.getElementById('signin');
    const courseList = document.getElementById('course-list');
    const courses = [
      { id: 1, name: 'Mathematics' },
      { id: 2, name: 'Science' },
      { id: 3, name: 'English' },
      { id: 4, name: 'History' }
    ];
  
    signupForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const role = document.getElementById('role').value;
  
      const user = { username, password, role };
      localStorage.setItem('user', JSON.stringify(user));
  
      showCourses(role);
    });
  
    signinForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const username = document.getElementById('signin-username').value;
      const password = document.getElementById('signin-password').value;
  
      const user = JSON.parse(localStorage.getItem('user'));
      if (user && user.username === username && user.password === password) {
        showCourses(user.role);
      } else {
        alert('Invalid username or password');
      }
    });
  
    function showCourses(role) {
      if (role === 'admin') {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.role === 'admin') {
          courseList.innerHTML = '';
          courses.forEach(function(course) {
            const div = document.createElement('div');
            div.innerHTML = `<input type="checkbox" id="course-${course.id}" value="${course.name}"> ${course.name}`;
            courseList.appendChild(div);
          });
  
          document.getElementById('courses').style.display = 'block';
        }
      } else if (role === 'student') {
        courseList.innerHTML = '';
        courses.forEach(function(course) {
          const div = document.createElement('div');
          div.innerHTML = `${course.name}`;
          courseList.appendChild(div);
        });
  
        document.getElementById('courses').style.display = 'block';
      }
    }
  });
  