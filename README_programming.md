## john thomure
# **programming 101:**

DOCTYPE tells the browser the era that the code was written in (<!DOCTYPE html> represents our current era: html5). This in a way is like the age of your html file. You can write html codes in older html era codes. Important for the upkeep of net art.

An Element is an open and closing tag together, [<head>____</head>] represents an Element. html is a series of Elements bundled in other Elements. The main two Elements are the head and the body. The head is for metadata (data about the data) while the body is the content.

Attributes describe the aspects of the Element (like the Elements metadata). This information is for when the file is being opened. Attributes aren’t the content but they define the content. The syntax of an Attribute is blank=“blank” (i.e. the value of the attribute and the name). For example, lang=“en” tells the browser that the language is going to be english.

The meta tag defines how data will be converted into say utf-8. Another way we can use the meta tag is by using “description” which means the “content” of the page will be the description, this is typically used by search engines.

The title tag defines the title of the page as it will appear online.

The header is different from the head tag, as the header tag is the header of your body element


html is for the content of the page, while css is concerned with the design of the page

you can inject bits of css into html as Attribute, like Style. However, this gets extremely complicated overtime so typically people won’t do this. a better way is to create a <style> element in the Head element. Once you have done this, you can begin writing css code within the html script. However, this is also not the best/most convent way to incorporate css into. CSS assigns a set of characteristics to a set of elements. We can create a Class for a CSS file, which is defined by a [ . ] at the beginning of our file for example
[ .red-fantasy ]. Class is CSS means something entirely different from other programming languages. Classes are meant to be used multiple times. Singular uses are referred to as id’s which are typically only used once for a single Element, though browsers have recently begun to treat them similarly to Classes.

Starts very simple and ends in kind of a “brainfuck” (actual Nick Briz summation).
-Starting with raw Javascript and then moving into library later on
-Functions exist across almost all programming language (though they sometimes go by different names such as routines or methods)
-Essentially a function creates a mini-program inside of a larger program.
-Functions store code to be used later, if you have a saved function to performa a task then you can reuse it
-In programming in general variables are considered scoped to a particular context, depending on where the variable was originally declared
-pure function (just does what it is programmed to do)
-impure function (creates a side effect or has an effect on another part of the program)
