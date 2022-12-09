import React from 'react'

const index = () => {
  return (
    <div>
        <h1>A Guide to Understand Machine Learning Pipeline with Case Study</h1>

<p><img alt="download" src="https://www.analyticsvidhya.com/wp-content/themes/analytics-vidhya/icon/pdf.svg" title="Download PDF" /></p>

<h2><strong>Introduction</strong></h2>

<p>Machine learning is one of the most advancing technologies in Computer Science in the present era. A lot of Researchers, Academicians, and Industrialists are investing their efforts to innovate in this field. If you find the process of training machines to learn to make decisions on their own fascinating, then this tutorial will be very helpful to you. A demonstration is shown on how by providing some data, we can actually train our models to learn something and use it over and over again for decision making.</p>

<p>This process might seem interesting at first but when we actually start to do it step by step, it takes up lots of time. Tinkering the code, changing models, and finding out points of error is very time-consuming and requires a lot of effort. Thus one effective approach that is being followed by the people is to create a machine learning pipeline.</p>

<h2><strong>Table of Contents</strong></h2>

<p>1. What is the Machine Learning Pipeline?</p>

<p>2. Advantages of using Machine Learning Pipeline in a Production Environment</p>

<p>3. Case Study to learn more about Machine Learning Pipeline</p>

<ul>
	<li>
	<p>Dataset Description</p>
	</li>
	<li>
	<p>Training Process</p>
	</li>
</ul>

<blockquote>
<blockquote>
<ol>
	<li>Data Preprocessing</li>
	<li>Exploratory Data Analysis</li>
	<li>Feature Selection</li>
	<li>Model Training</li>
</ol>
</blockquote>
</blockquote>

<ul>
	<li>
	<p>Validation Process</p>
	</li>
	<li>
	<p>Testing Process</p>
	</li>
</ul>

<p>4. Conclusion</p>

<h2><strong>What is the Machine Learning Pipeline?</strong></h2>

<p>Machine Learning pipeline refers to the creation of independent and reusable modules in such a manner that they can be pipelined together to create an entire workflow. Keeping this sophisticated definition aside, what it simply means is that we divide our work into smaller parts and automate it in such a way that we can do the entire task as small subtasks.</p>

<p>Let&rsquo;s understand the concept with the help of a real-life example that you have encountered in your day to day life:</p>

<p>Think of it as similar to washing clothes. The procedure to segregate clothes into different piles, washing each pile of clothes, drying them, and hanging them. Each step can be done independently and helps us to do tasks faster because they can now be done in an organized manner.</p>

<h2><strong>Advantages of using Machine Learning Pipeline in a Production Environment</strong></h2>

<ol>
	<li>
	<p><strong>Reusability of components</strong></p>
	</li>
</ol>

<blockquote>
<p>Now , one of the major benefits of it is the flexibility to use these components independently and iteratively.</p>

<p><strong>For example,&nbsp;</strong>if you have a dataset and you would like to validate your model on two different criterias, then you don&rsquo;t need to run the training component again, you can run your validation component separately and create two pipelines. In this manner we can create more accurate algorithms with more ease.</p>
</blockquote>

<ol start="2">
	<li>
	<p><strong>Ease of implementation</strong></p>
	</li>
</ol>

<blockquote>
<p>Machine learning models can be created with more ease and efficiency as we have defined these components because implementation can be done in stepwise manner for each subpart.</p>
</blockquote>

<ol start="3">
	<li>
	<p><strong>Scalability and Customization</strong></p>
	</li>
</ol>

<blockquote>
<p>Pipelining automates the entire workflow from correlating and feeding data into the model and analysing the results . Thus using these well managed implementations is much more robust, scalable and customizable.</p>
</blockquote>

<ol start="4">
	<li>
	<p><strong>Easy expansion</strong></p>
	</li>
</ol>

<blockquote>
<p>It also helps in expanding one&rsquo;s model as we don&rsquo;t need to copy paste all previous code, we can use previous components in the pipeline and build upon them. Copying previous code is very cumbersome and is considered a bad practice.</p>
</blockquote>

<ol start="5">
	<li>
	<p><strong>Automatic Updation</strong></p>
	</li>
</ol>

<blockquote>
<p>Manual updation of various scripts is not necessary when we tinker with some specified configuration , it gets updated automatically. This eliminates scope of error which might be present in manual updation.</p>
</blockquote>

<p>After knowing the advantages of using a machine learning pipeline, now comes the most interesting part of this tutorial where we are trying to use the same concept in one of the problem statements.</p>

<p>So, let&rsquo;s walk through various steps involved in its creation. I will use the popular Iris dataset for demonstration purposes. Thus, input to our pipeline would be the Iris dataset.</p>

<h2><strong>Case Study to learn more about Machine Learning Pipeline</strong></h2>

<ul>
	<li>
	<p><strong>Dataset description</strong></p>
	</li>
</ul>

<blockquote>
<p>The Iris dataset contains 3 classes each corresponding to a type of Iris plant . These are Iris Setosa, Iris Versicolour and Iris Virginica. There are 50 instances of each class and each class is linearly separable from other classes. The features in the dataset are basically characteristics of the data and can be numerical or categorical. There are 4 independent variables or what we call the features in machine learning and these are sepal length , sepal width , petal length and petal width. All of these features are numerical.</p>
</blockquote>

<ul>
	<li>
	<p><strong>Training process:</strong></p>
	</li>
</ul>

<ol>
	<li>
	<p><strong>Data preprocessing</strong></p>
	</li>
</ol>

<blockquote>
<p>Our input dataset might have a lot of issues which impact the performance of the machine learning model negatively. Hence we need to deal with the problem of missing values, noisy or duplicate data or sometimes we need to format data in a certain range so as to improve the accuracy of our model. Thus we need to preprocess our database prior to the training model.</p>

<p>For Missing Values, we could delete the entire row or fill in the missing values with the mean value of the feature. In the similar manner we could rescale data, binarise , normalise or encode data. One thing to note is that we use these techniques depending on the dataset as well as the problem that we are trying to address.</p>

<p>Another important step which occurs in data preprocessing is splitting the dataset into training and testing dataset.</p>

<p>For Iris dataset Classification , following preprocessing techniques are used.</p>
</blockquote>

<blockquote>
<blockquote>
<p><strong>1. Encoding:&nbsp;</strong>The target variable i.e. Species column is categorical and hence needs to be encoded to numerical data. We will use Label Encoder from sklearn preprocessing library. It will encode Iris &ndash; setosa to 0 , Iris &ndash; versicolor to 1 and Iris-Virginica to 2.</p>
</blockquote>
</blockquote>

<blockquote>
<blockquote>
<pre>
from sklearn.preprocessing import LabelEncoder
encoder=LabelEncoder()
y = encoder.fit_transform(y)</pre>
</blockquote>

<blockquote>
<p><strong>2. Train-test split:</strong>&nbsp;We will now split our data in 80 : 20 ratio with 80 percent of the original dataset as training one.</p>
</blockquote>
</blockquote>

<blockquote>
<blockquote>
<pre>
from sklearn.model_selection import train_test_split
xtrain , xtest, ytrain, ytest = train_test_split(x,y,test_size=0.2, shuffle=True)
xtest.head()</pre>
</blockquote>
</blockquote>

<ol start="2">
	<li>
	<p><strong>Exploratory Data Analysis</strong></p>
	</li>
</ol>

<blockquote>
<p>Before applying any model, understanding the dataset is a critical step. Exploring data and finding its charctericstics is essentially what we call Exploratory Data Analysis. We can visualise the data using various libraries.</p>

<p>For given Iris Dataset , We can visually see the count of each species.</p>

<p><img alt="Machine Learning Pipeline " src="https://editor.analyticsvidhya.com/uploads/30127targetcont.PNG" style={{height:474, width:631}} /></p>

<p><strong>Image Source: Author</strong></p>

<p>We can also visualise distrubtion of each feature.&nbsp;</p>
</blockquote>

    </div>
  )
}

export default index