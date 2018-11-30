/**
 * @function {githubgist}
 *
 * @param {object} block
 */
function githubgist(block) {
    // No need to go further
    if (!block.kwargs.link) {
        return '';
    }

    return '<script src="' + block.kwargs.link + '"></script>';
}



module.exports = {
    blocks: {githubgist}
};
