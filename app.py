import os
import pandas as pd

# Set the path to the folder containing your files
folder_path = '/content/drive/MyDrive/cyber_bullying'

# List all CSV files in the folder
files = [file for file in os.listdir(folder_path) if file.endswith('.csv')]

# Create an empty list to store dataframes
dataframes = []

# Loop through all the CSV files and read them
for file in files:
    file_path = os.path.join(folder_path, file)
    df = pd.read_csv(file_path)  # Read each CSV file into a DataFrame
    dataframes.append(df)  # Append the DataFrame to the list

# Concatenate all DataFrames into one
data = pd.concat(dataframes, ignore_index=True)

# Check the first few rows of the combined dataset
data.head()
import seaborn as sns
import matplotlib.pyplot as plt

# Assuming 'data' is your combined DataFrame

# Calculate the correlation matrix
correlation_matrix = data.corr()

# Create the heatmap
plt.figure(figsize=(10, 8))  # Adjust figure size as needed
sns.heatmap(correlation_matrix, annot=True, cmap='coolwarm', fmt=".2f")
plt.title('Correlation Matrix Heatmap')
plt.show()
import os
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report

# Step 1: Load all files from the folder
folder_path = '/content/drive/MyDrive/cyber_bullying'  # Path to your folder

# List all CSV files in the folder
files = [file for file in os.listdir(folder_path) if file.endswith('.csv')]

# Create an empty list to store dataframes
dataframes = []

# Loop through all the CSV files and read them
for file in files:
    file_path = os.path.join(folder_path, file)
    df = pd.read_csv(file_path)  # Read each CSV file into a DataFrame
    dataframes.append(df)  # Append the DataFrame to the list

# Concatenate all DataFrames into one
data = pd.concat(dataframes, ignore_index=True)

# Step 2: Preprocessing the data
# Keep only relevant columns (Text and target label)
data_cleaned = data[['Text', 'ed_label_1']]  # Assuming 'ed_label_1' is the bullying label

# Drop rows with missing values
data_cleaned = data_cleaned.dropna(subset=['Text', 'ed_label_1'])

# Convert the target labels to binary (0 or 1)
data_cleaned['ed_label_1'] = data_cleaned['ed_label_1'].apply(lambda x: 1 if x >= 0.5 else 0)

# Step 3: Split data into features (X) and target (y)
X = data_cleaned['Text']  # Features (text)
y = data_cleaned['ed_label_1']  # Target label (bullying or not)

# Step 4: Split data into training and testing sets (80% training, 20% testing)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Step 5: Convert text data into numerical features using TF-IDF Vectorizer
tfidf = TfidfVectorizer(stop_words='english', max_features=5000)
X_train_tfidf = tfidf.fit_transform(X_train)
X_test_tfidf = tfidf.transform(X_test)

# Step 6: Train a machine learning model (Logistic Regression)
model = LogisticRegression()
model.fit(X_train_tfidf, y_train)

# Step 7: Make predictions on the test set
y_pred = model.predict(X_test_tfidf)

# Step 8: Evaluate the model's performance
accuracy = accuracy_score(y_test, y_pred)
print(f'Accuracy: {accuracy * 100:.2f}%')

# Print detailed classification report (Precision, Recall, F1-score)
print(classification_report(y_test, y_pred))
# prompt: test and train the data

# Assuming you have already executed the code provided and have the variables X_train_tfidf, y_train, X_test_tfidf, and y_test

from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report

# Initialize a RandomForestClassifier
rf_classifier = RandomForestClassifier(n_estimators=100, random_state=42)  # You can adjust parameters

# Train the model
rf_classifier.fit(X_train_tfidf, y_train)

# Make predictions
rf_predictions = rf_classifier.predict(X_test_tfidf)

# Evaluate the model
accuracy = accuracy_score(y_test, rf_predictions)
print(f"Random Forest Accuracy: {accuracy * 100:.2f}%")
print(classification_report(y_test, rf_predictions))
# prompt: "Visualize the model's classification performance using a confusion matrix and bar charts."

from sklearn.metrics import confusion_matrix
import seaborn as sns
import matplotlib.pyplot as plt

# Assuming 'y_test' and 'rf_predictions' are available from the previous code

# Calculate the confusion matrix
cm = confusion_matrix(y_test, rf_predictions)

# Plot the confusion matrix using seaborn
plt.figure(figsize=(8, 6))
sns.heatmap(cm, annot=True, fmt='d', cmap='Blues',
            xticklabels=['Not Bullying', 'Bullying'],
            yticklabels=['Not Bullying', 'Bullying'])
plt.title('Confusion Matrix')
plt.xlabel('Predicted Label')
plt.ylabel('True Label')
plt.show()

# Bar chart for class distribution
class_counts = pd.Series(y_test).value_counts()
plt.figure(figsize=(6, 4))
class_counts.plot(kind='bar', color=['skyblue', 'salmon'])
plt.title('Class Distribution in Test Set')
plt.xlabel('Class')
plt.ylabel('Number of Samples')
plt.xticks([0, 1], ['Not Bullying', 'Bullying'], rotation=0)
plt.show()
!wget -qO- ipv4.icanhazip.com


!streamlit run app.py & npx localtunnel --port 8501


new_text = []
print("Enter the text you want to predict (enter 'done' when finished):")

while True:
    user_input = input("Enter text: ")
    if user_input.lower() == 'done':  # If the user types 'done', stop the input
        break
    new_text.append(user_input)

# Preprocess the input text using the same TF-IDF vectorizer
new_text_tfidf = tfidf.transform(new_text)

# Use the trained model to make predictions
predictions = model.predict(new_text_tfidf)

# Map predictions to human-readable labels (0 = Non-Bullying, 1 = Bullying)
predicted_labels = ['Bullying' if label == 1 else 'Non-Bullying' for label in predictions]

# Step 6: Display the predictions
for text, label in zip(new_text, predicted_labels):
    print(f"Text: {text}")
    print(f"Prediction: {label}\n")
