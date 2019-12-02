## Monograph Frontend Take Home Assignment 

### Dining review app

![Dining App](/app.png)

## Instructions

1. **Dynamic inputs** - The Preview section on the right has static placeholder text. Wire up the app so that anything typed in both the feedback and party inputs updates the preview on the right.
2. **Refactor inputs** - Depending on how you wrote the first step, you may need to refactor the update method to only use a single method (instead of two) for updating each input. Make sure you're only passing a single method to both inputs. For example:
    ```
    update() {}
    <input onChange={update}>
    <input onChange={update}>
    ```
3. **Product decision** - We're a small team at Monograph so you may be asked to make recommendations based on a feature we're building. Code from scratch, modify a library, or use a best practice idea is often a decision we're confronted with. You'll be adding an emoji selector to the form on the left. In the [Figma File](https://www.figma.com/file/jjqRhIa54hOakjjAWkpbmC/Take-home-frontend-test?node-id=0%3A1) we've added a few ideas, but we'd like to see your thinking around the best way to implement a feature which allows a user to express their emotions after dining somewhere.

    In your README doc, write a few sentences about why you might pick a certain direction.

4. **Add emoji selector** - Now implement your idea in code and render it on the right in the Preview section.
5. **Style preview card** - Based on the [Figma File](https://www.figma.com/file/jjqRhIa54hOakjjAWkpbmC/Take-home-frontend-test?node-id=0%3A1), add CSS styling to the Preview area. In Figma you can click the "Code" tab in the upper right to get the relevant CSS values for each element you click.
6. **Responsive styling** - Now that your Preview is looking good, we need to make the app work for mobile users. We'd like the Preview section to be on top in mobile and everything to look similar to the Figma mockup. Don't worry about tablet styling for now, this is just for mobile.

## Emoji Selector

The survey form asks diners *How was your meal*. The following list are decisions I made when brainstorming what was important to me for this section of the assignment. 

1) I knew early on that I wanted to use radio inputs rather than have a drop down selector becuase I didn't want users to have to take one extra step to provide an answer. 

2) I wanted to keep a simple design and only provide a handful of options for the user, rather than provide a full emoji picker. I felt an emoji picker would seem a little excessive for a brief survey.

3) I knew I wanted to show the user what each emoji selection represented, instead of showing just the emoji smiley faces. 

After I decided on the above preferences, I started researching and thinking of the designs I would like to implement. 

1) At first I thought of using an emoji slidebar, something similar to the image displayed below. 
 <img src="https://emd.diamonds/homepage/blog/images/50.jpg" alt="Heart Eyes Smiley Face on scroll bar" width="300px"> I liked this slidebar because it's unique and would be fun to explore. I think users would also enjoy making their selection with this. However I wasn't sure how much time this would involve so I decided to keep looking at ideas and come back to this if I had extra time. 

 2) The second idea I had was to use a simple green, yellow, red emoji selector for customers to share their dining experience. Something similar to the image below.  
 <img src="https://image.shutterstock.com/image-vector/vector-illustration-facial-expressions-smiley-260nw-735337456.jpg" alt="Green Happy Smiley Face, Yellow Neutral Face, Red Sad Face" width="300px">
 However, I ended up not using this as I felt these emojis are typically used for rating service and not the full dining experience. I also felt I needed a softer and more professional design to match the rest of the page layout and decided to pass on this idea.

 3) The third idea I had was to design something similar to the image below. 
 <img src="https://www.nicereply.com/blog/wp-content/uploads/2017/11/image8.png" alt="Terrible Smiley Face, Sad Smiley Face, Okay Smiley Face, Good Smiley Face, Great Smiley Face" width="300px"> 

## Final Webpage
<img src="./monographreviewlaptopview.png">



