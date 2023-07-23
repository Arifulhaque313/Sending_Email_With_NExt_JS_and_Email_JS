## Sending Email with Next.Js And Email.Js
1. clone it first
2. open the file directory
3. run : yarn or npm -i
4. yarn run dev or npm run dev

========#========
## Email Setup 
1. First install yarn add @emailjs/browser or npm install @emailjs/browser
2. Go to https://www.emailjs.com/
3. configure everything after that you will get 
    1. service Id
    2. template Id
    3. User id 

4. Now set it when submit the form like 

    ===================
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_44hjp62', 'template_us9x1vt', form.current, 'UguCX_V3vyUhCTclT')
      .then((result) => {
          form.current.reset();

          setIsFormSubmitted(true);
          setTimeout(() => {
            setIsFormSubmitted(false);
          }, 5000);
      }, (error) => {
          console.log(error.text);
      });
  };

  5. Now run the Application , Send Email and Check the email inbox which email are connect with email js


