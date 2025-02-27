require("dotenv").config(); // Add this at the top
const splitPdf = require("@vtfk/pdf-splitter");

async function splitPDFFile(inputPath, outputDirectory, pages) {
  console.log("Splitting PDF file:", inputPath);
  console.log("Output directory:", outputDirectory);
  console.log("Pages:", pages);

  const options = {
    pdf: inputPath, // This is what the package expects
    outputDir: outputDirectory,
    ranges: pages, // The package uses 'ranges' for page selections
  };

  try {
    const result = await splitPdf(options); // Pass the options object
    console.log("PDF split successfully:", result);
    return result;
  } catch (error) {
    console.error("Error splitting PDF:", error);
    throw error;
  }
}

module.exports = {
  splitPDFFile,
};
