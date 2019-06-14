"""
This code block is to test the python running in express js scheme.
"""
import argparse


def summarize_txt(text):
    return text[:len(text)//2]


def main():
    parser = argparse.ArgumentParser()

    # Required parameters
    parser.add_argument("--text",
                        default=None,
                        type=str,
                        required=True,
                        help="The highlighted text input.")

    args = parser.parse_args()
    summary = summarize_txt(args.text)

    # TODO: Delete following after successfully implemented into ExpressJS
    print("this is summary: {} \n(original: {})".format(summary,
                                                        args.text))

    return summary


if __name__ == "__main__":
    main()
