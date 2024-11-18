const core = require('@actions/core');

try {
    const exampleInput = core.getInput('exampleInput');
    console.log(`Example input: ${exampleInput}`);
} catch (error) {
    core.setFailed(error.message);
}