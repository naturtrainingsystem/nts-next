import { useState } from "react";

const LOGO_B64 = "data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAEAAQADASIAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAYHBAUIAgMB/8QATRAAAQMDAgMCCAcNBQgDAAAAAQACAwQFEQYHEiExQVETFCIyYXF0sQg2N4GRlLIVFyM0QlJTYnJzodHhFjOCkqIkJUNEVFXB0mWz8f/EABsBAQACAwEBAAAAAAAAAAAAAAAFBgEEBwID/8QAOBEAAgAEAwMJBgYDAQAAAAAAAAECAwQRBQYhMUFxEjRRYZGhscHRExYicoHhFDIzNYKyI1LwQv/aAAwDAQACEQMRAD8A40REW0eQiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgC908M1RPHT08Uk00jgxkbGlznOJwAAOZJPYvCtz4J9ost03coJbneau31dADW2+Gmjy6sli8t0RcQQ0cDXE56jIBBWniFWqOlmVDV+Sm+zh/y2nuCHlRJDSXwftc6i0vb9QxGgoKerrjSuir5fF5YGNPC6ZzXgZaCCMAlxxyC0W5e0es9CVVyfcLVU1FooZWRi7RQuFNKJACxzXHsOQD3O5ZyrY+ERvHq3T+vJbFY54KWqgghlra2WljnfK+WNsojj8KHCOFjXtaA0AkhxcTlTnae9Um7u0VbS6ts09XTiaaGsoba50XjE8EYnjlgYCAx7hlrmA8JcGuwMkKlvG8YppUFfUKFyYmtF+ZJu6d9L6bOm6ukbXspUTcEO04vRfavjENdUQthmhDJXNEcw/CMwfNdyHlDofSvir+ndXNMIiLJgIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCt34H1Veabf3T7bLeqK0vmc6OqfV44JqcDikhAPVzg3yenPB7FUSLzErqxk7B+HJpu93Ow0lwt9HLLBp26V7rrFGMujZVvbLBUuA/ILWlnEeQLMd6oT4N+nLzft39P1Nra+KmtFdDcrjWnyYqOmheJHyPf0aOFpAz1JAXQWznwhtE3iq0hpC92qXSjrdaW0P9ofumG+DfG0YY7ibh0T+DmJCQHEcvylJL5vntJBpbUk1BqCovFws8jhQWutpY6ejuVRkeDlaynY0TR8Tc5eeWM4Hkla6bhXJsZIv8NWp0xVbWWCCfUE9v1BDVTV1Hp9jstfT1Mz3tfKweY5rPNJxjLm458oj8H630VJt7DcoImGsrp5fGJi0FxDHcLWZ7ABzx+sqp303Tum7WqaXUF2tVtt1RT0bKTho2u8sBxdxOLiSebjgdg5elbHZDcGk014zZr7JIy2VD/DRTNYX+Alxg5A58LgBnHQgHHVQmYqKfUYe4ZOrTTaW9dHnbqJrAKmTT1iim6Jq1+h/9p9ToCGmpIHPdDRUkZeMP4adg4h3HlzHXl0XK+7FsorPuHebfbohFSRVH4Ng6My0OLR6ASQruuW7+jKa21VVQVNRW1cORBTOpnMEzuxxceQZnrnnjsXON1rqm5XKpr6yUzVFRK6WV56uc45JUVlKgq5M6ZNnJwq1rO6u+nXo8+JK5lrKabKglymm73uty+/kYyIivRTgiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAKtDd/UFRe6NtbprQFrZQS1tspKiR7quUScLH1rmngiccc2DOeR6Z2G0V6pbLardNdbrXQUNHTt4pJp3hjR3dT1PYOpPJeRb7hW7oX7UV61TWSw0M4bT2+hqXuaY4OZy8NPCS7OT6PQFtY3g0YM5OW7T5kOnUmVS9kPBqRijqJtN+Rt1ppAQQQQRkEcwR2LW3PSGntQSCW+2GhqpQABJJFh+B0G8cxb7Cy67UNkzEMkqNzXK7tq7L3UiXFQRE1omuqhm5bBHGEgqZhE2cT8VxuknNqFhLZJm4GHmP8ABcfzgD0zk8itpqDRenNRva6+2aGqkZjhkyWSYHQcbcHA7Oeihf8AZfr2OXwNJrbSU8Y6GZzmyD1Zjb9K3UXOM+ipf4MNXyeGVT+Pf71e8mB4JqLpXRvgYTy4s9rqt0+xmmrA5rKq50QPLyIq53+6sWy7CXWJ+bXqiw4DIkfGCPnDfpVv4a3Bs1bCxWV8pxJqhKPnT8isqLO4X2O12eFsFqs1BQxgABkETY2j9gC+N50hpS8yGW66fs9dIernVFKx5/Yop1MzN+FDKjikNv2fGqsNPdLqVNJIp5jmj0tFNbL/dLZM/OQIquRoB9bgcfMseXSmmZgRLp23vB6g0cfxWFXaV05WuL6rT9qlce10lMxx/aFHosCp80q5r+pFui2pPUucPLfVAT6P0uRjGLBSAD1Rpj8FjTaCpVRy0tcYgZrXQue/rJJTMcT85aVg1X2X7O1Du1ptNWA94pJTEfzHvb+5Wqq9iNJsLjb9QVTPyZaVkn1hw/iteNX2d7N58i1K3oWi91dFrfMl6XeRbDqzS5+fS1sP8A5DP4KN1WzWgag+dpqiqovyCQPDvUQfqWlk7GtXt8ms0w7vM0oH+jlhVeimKMzpR13O1i/Rj+S90jVKlubWxp+XzO2YtpaHkz0EDj2maJp/iVJLBtPs7XBtXWX+j7vKNMx/Zx+pWlF+XJjkJGSXHqcnJJVhV2RlG9lpbqiJTcblOp09v5Iya2vvNTLCHczDE0PH6w+laJaVERbJkCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAKe6V09ZtXWr7m3qi8c8J4RVQkNlhz1w4EEEHsIPMArJRExi7DZNWKuaKnZbpuSKVbR7Lao07UG5N1JW1zhHI9r6gtjhY7i8h7Ixnjx1ycd62F8+HLs1bz/xVLpqy1dvmqYJi6agp+MkxOH6xDHnOWAnkCupkWE8VqakneUlv6GfRcGpqOVX1K3p6M8Ttt6j1Dq2mvVk1DVaes1e2mloI6V7GRQ0kdNNDJHxsB4sNeGAHqeEZAyCtrrXS1jpJuirrfWXqUXHSNPMKl11nqJJp4WvZxNmklLXOicGt4XPJwQCXF2Sd4ItqOKVlLK6JU45UkpPdstHifRR7TbE6W0ybJb4rXbYLVTWCCBrnxxRR08bGB52ue7HFl2XZ5nOegANwjd8GVf6oP7kpe/gyrXVB/clL38GVa6oP7kpe/gyrSMUr7Vl3mOuuSSijb/AI7as/rH/nH+at7trqXU2pbBp+3X7VVzrqGy3BtdQQVL2ujhnjIMbh5OTw8RDT0OT0VCIpMWIVU0pdW5X7FfDIjiVNI7L3U15sraykc8/wB3Yp+N5bGw8y0niz2c885yuT8ek8S/cSSfzpkv6VXq2NhG1sUbWMaMNa0YAHoAXyRa6XEa+e2VLTdot+LbLt1S4E2ko0qfHfT3bIiIrUdQIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgC908M1RPHT08Uk00jgxkbGlznOJwAAOZJPYvCtz4J9ost03coJbneau31dADW2+Gmjy6sli8t0RcQQ0cDXE56jIBBWniFWqOlmVDV+Sm+zh/y2nuCHlRJDSXwftc6i0vb9QxGgoKerrjSuir5fF5YGNPC6ZzXgZaCCMAlxxyC0W5e0es9CVVyfcLVU1FooZWRi7RQuFNKJACxzXHsOQD3O5ZyrY+ERvHq3T+vJbFY54KWqgghlra2WljnfK+WNsojj8KHCOFjXtaA0AkhxcTlTnae9Um7u0VbS6ts09XTiaaGsoba50XjE8EYnjlgYCAx7hlrmA8JcGuwMkKlvG8YppUFfUKFyYmtF+ZJu6d9L6bOm6ukbXspUTcEO04vRfavjENdUQthmhDJXNEcw/CMwfNdyHlDofSvir+ndXNMIiLJgIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCt34H1Veabf3T7bLeqK0vmc6OqfV44JqcDikhAPVzg3yenPB7FUSLzErqxk7B+HJpu93Ow0lwt9HLLBp26V7rrFGMujZVvbLBUuA/ILWlnEeQLMd6oT4N+nLzft39P1Nra+KmtFdDcrjWnyYqOmheJHyPf0aOFpAz1JAXQWznwhtE3iq0hpC92qXSjrdaW0P9ofumG+DfG0YY7ibh0T+DmJCQHEcvylJL5vntJBpbUk1BqCovFws8jhQWutpY6ejuVRkeDlaynY0TR8Tc5eeWM4Hkla6bhXJsZIv8NWp0xVbWWCCfUE9v1BDVTV1Hp9jstfT1Mz3tfKweY5rPNJxjLm458oj8H630VJt7DcoImGsrp5fGJi0FxDHcLWZ7ABzx+sqp303Tum7WqaXUF2tVtt1RT0bKTho2u8sBxdxOLiSebjgdg5elbHZDcGk014zZr7JIy2VD/DRTNYX+Alxg5A58LgBnHQgHHVQmYqKfUYe4ZOrTTaW9dHnbqJrAKmTT1iim6Jq1+h/9p9ToCGmpIHPdDRUkZeMP4adg4h3HlzHXl0XK+7FsorPuHebfbohFSRVH4Ng6My0OLR6ASQruuW7+jKa21VVQVNRW1cORBTOpnMEzuxxceQZnrnnjsXON1rqm5XKpr6yUzVFRK6WV56uc45JUVlKgq5M6ZNnJwq1rO6u+nXo8+JK5lrKabKglymm73uty+/kYyIivRTgiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAKtDd/UFRe6NtbprQFrZQS1tspKiR7quUScLH1rmngiccc2DOeR6Z2G0V6pbLardNdbrXQUNHTt4pJp3hjR3dT1PYOpPJeRb7hW7oX7UV61TWSw0M4bT2+hqXuaY4OZy8NPCS7OT6PQFtY3g0YM5OW7T5kOnUmVS9kPBqRijqJtN+Rt1ppAQQQQRkEcwR2LW3PSGntQSCW+2GhqpQABJJFh+B0G8cxb7Cy67UNkzEMkqNzXK7tq7L3UiXFQRE1omuqhm5bBHGEgqZhE2cT8VxuknNqFhLZJm4GHmP8ABcfzgD0zk8itpqDRenNRva6+2aGqkZjhkyWSYHQcbcHA7Oeihf8AZfr2OXwNJrbSU8Y6GZzmyD1Zjb9K3UXOM+ipf4MNXyeGVT+Pf71e8mB4JqLpXRvgYTy4s9rqt0+xmmrA5rKq50QPLyIq53+6sWy7CXWJ+bXqiw4DIkfGCPnDfpVv4a3Bs1bCxWV8pxJqhKPnT8isqLO4X2O12eFsFqs1BQxgABkETY2j9gC+N50hpS8yGW66fs9dIernVFKx5/Yop1MzN+FDKjikNv2fGqsNPdLqVNJIp5jmj0tFNbL/dLZM/OQIquRoB9bgcfMseXSmmZgRLp23vB6g0cfxWFXaV05WuL6rT9qlce10lMxx/aFHosCp80q5r+pFui2pPUucPLfVAT6P0uRjGLBSAD1Rpj8FjTaCpVRy0tcYgZrXQue/rJJTMcT85aVg1X2X7O1Du1ptNWA94pJTEfzHvb+5Wqq9iNJsLjb9QVTPyZaVkn1hw/iteNX2d7N58i1K3oWi91dFrfMl6XeRbDqzS5+fS1sP8A5DP4KN1WzWgag+dpqiqovyCQPDvUQfqWlk7GtXt8ms0w7vM0oH+jlhVeimKMzpR13O1i/Rj+S90jVKlubWxp+XzO2YtpaHkz0EDj2maJp/iVJLBtPs7XBtXWX+j7vKNMx/Zx+pWlF+XJjkJGSXHqcnJJVhV2RlG9lpbqiJTcblOp09v5Iya2vvNTLCHczDE0PH6w+laJaVERbJkCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAKe6V09ZtXWr7m3qi8c8J4RVQkNlhz1w4EEEHsIPMArJRExi7DZNWKuaKnZbpuSKVbR7Lao07UG5N1JW1zhHI9r6gtjhY7i8h7Ixnjx1ycd62F8+HLs1bz/xVLpqy1dvmqYJi6agp+MkxOH6xDHnOWAnkCupkWE8VqakneUlv6GfRcGpqOVX1K3p6M8Ttt6j1Dq2mvVk1DVaes1e2mloI6V7GRQ0kdNNDJHxsB4sNeGAHqeEZAyCtrrXS1jpJuirrfWXqUXHSNPMKl11nqJJp4WvZxNmklLXOicGt4XPJwQCXF2Sd4ItqOKVlLK6JU45UkpPdstHifRR7TbE6W0ybJb4rXbYLVTWCCBrnxxRR08bGB52ue7HFl2XZ5nOegANwjd8GVf6oP7kpe/gyrXVB/clL38GVa6oP7kpe/gyrSMUr7Vl3mOuuSSijb/AI7as/rH/nH+at7trqXU2pbBp+3X7VVzrqGy3BtdQQVL2ujhnjIMbh5OTw8RDT0OT0VCIpMWIVU0pdW5X7FfDIjiVNI7L3U15sraykc8/wB3Yp+N5bGw8y0niz2c885yuT8ek8S/cSSfzpkv6VXq2NhG1sUbWMaMNa0YAHoAXyRa6XEa+e2VLTdot+LbLt1S4E2ko0qfHfT3bIiIrUdQIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgC908M1RPHT08Uk00jgxkbGlznOJwAAOZJPYvCtz4J9ost03coJbneau31dADW2+Gmjy6sli8t0RcQQ0cDXE56jIBBWniFWqOlmVDV+Sm+zh/y2nuCHlRJDSXwftc6i0vb9QxGgoKerrjSuir5fF5YGNPC6ZzXgZaCCMAlxxyC0W5e0es9CVVyfcLVU1FooZWRi7RQuFNKJACxzXHsOQD3O5ZyrY+ERvHq3T+vJbFY54KWqgghlra2WljnfK+WNsojj8KHCOFjXtaA0AkhxcTlTnae9Um7u0VbS6ts09XTiaaGsoba50XjE8EYnjlgYCAx7hlrmA8JcGuwMkKlvG8YppUFfUKFyYmtF+ZJu6d9L6bOm6ukbXspUTcEO04vRfavjENdUQthmhDJXNEcw/CMwfNdyHlDofSvir+ndXNMIiLJgIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCt34H1Veabf3T7bLeqK0vmc6OqfV44JqcDikhAPVzg3yenPB7FUSLzErqxk7B+HJpu93Ow0lwt9HLLBp26V7rrFGMujZVvbLBUuA/ILWlnEeQLMd6oT4N+nLzft39P1Nra+KmtFdDcrjWnyYqOmheJHyPf0aOFpAz1JAXQWznwhtE3iq0hpC92qXSjrdaW0P9ofumG+DfG0YY7ibh0T+DmJCQHEcvylJL5vntJBpbUk1BqCovFws8jhQWutpY6ejuVRkeDlaynY0TR8Tc5eeWM4Hkla6bhXJsZIv8NWp0xVbWWCCfUE9v1BDVTV1Hp9jstfT1Mz3tfKweY5rPNJxjLm458oj8H630VJt7DcoImGsrp5fGJi0FxDHcLWZ7ABzx+sqp303Tum7WqaXUF2tVtt1RT0bKTho2u8sBxdxOLiSebjgdg5elbHZDcGk014zZr7JIy2VD/DRTNYX+Alxg5A58LgBnHQgHHVQmYqKfUYe4ZOrTTaW9dHnbqJrAKmTT1iim6Jq1+h/9p9ToCGmpIHPdDRUkZeMP4adg4h3HlzHXl0XK+7FsorPuHebfbohFSRVH4Ng6My0OLR6ASQruuW7+jKa21VVQVNRW1cORBTOpnMEzuxxceQZnrnnjsXON1rqm5XKpr6yUzVFRK6WV56uc45JUVlKgq5M6ZNnJwq1rO6u+nXo8+JK5lrKabKglymm73uty+/kYyIivRTgiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAKtDd/UFRe6NtbprQFrZQS1tspKiR7quUScLH1rmngiccc2DOeR6Z2G0V6pbLardNdbrXQUNHTt4pJp3hjR3dT1PYOpPJeRb7hW7oX7UV61TWSw0M4bT2+hqXuaY4OZy8NPCS7OT6PQFtY3g0YM5OW7T5kOnUmVS9kPBqRijqJtN+Rt1ppAQQQQRkEcwR2LW3PSGntQSCW+2GhqpQABJJFh+B0G8cxb7Cy67UNkzEMkqNzXK7tq7L3UiXFQRE1omuqhm5bBHGEgqZhE2cT8VxuknNqFhLZJm4GHmP8ABcfzgD0zk8itpqDRenNRva6+2aGqkZjhkyWSYHQcbcHA7Oeihf8AZfr2OXwNJrbSU8Y6GZzmyD1Zjb9K3UXOM+ipf4MNXyeGVT+Pf71e8mB4JqLpXRvgYTy4s9rqt0+xmmrA5rKq50QPLyIq53+6sWy7CXWJ+bXqiw4DIkfGCPnDfpVv4a3Bs1bCxWV8pxJqhKPnT8isqLO4X2O12eFsFqs1BQxgABkETY2j9gC+N50hpS8yGW66fs9dIernVFKx5/Yop1MzN+FDKjikNv2fGqsNPdLqVNJIp5jmj0tFNbL/dLZM/OQIquRoB9bgcfMseXSmmZgRLp23vB6g0cfxWFXaV05WuL6rT9qlce10lMxx/aFHosCp80q5r+pFui2pPUucPLfVAT6P0uRjGLBSAD1Rpj8FjTaCpVRy0tcYgZrXQue/rJJTMcT85aVg1X2X7O1Du1ptNWA94pJTEfzHvb+5Wqq9iNJsLjb9QVTPyZaVkn1hw/iteNX2d7N58i1K3oWi91dFrfMl6XeRbDqzS5+fS1sP8A5DP4KN1WzWgag+dpqiqovyCQPDvUQfqWlk7GtXt8ms0w7vM0oH+jlhVeimKMzpR13O1i/Rj+S90jVKlubWxp+XzO2YtpaHkz0EDj2maJp/iVJLBtPs7XBtXWX+j7vKNMx/Zx+pWlF+XJjkJGSXHqcnJJVhV2RlG9lpbqiJTcblOp09v5Iya2vvNTLCHczDE0PH6w+laJaVERbJkCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAKe6V09ZtXWr7m3qi8c8J4RVQkNlhz1w4EEEHsIPMArJRExi7DZNWKuaKnZbpuSKVbR7Lao07UG5N1JW1zhHI9r6gtjhY7i8h7Ixnjx1ycd62F8+HLs1bz/xVLpqy1dvmqYJi6agp+MkxOH6xDHnOWAnkCupkWE8VqakneUlv6GfRcGpqOVX1K3p6M8Ttt6j1Dq2mvVk1DVaes1e2mloI6V7GRQ0kdNNDJHxsB4sNeGAHqeEZAyCtrrXS1jpJuirrfWXqUXHSNPMKl11nqJJp4WvZxNmklLXOicGt4XPJwQCXF2Sd4ItqOKVlLK6JU45UkpPdstHifRR7TbE6W0ybJb4rXbYLVTWCCBrnxxRR08bGB52ue7HFl2XZ5nOegANwjd8GVf6oP7kpe/gyrXVB/clL38GVa6oP7kpe/gyrSMUr7Vl3mOuuSSijb/AI7as/rH/nH+at7trqXU2pbBp+3X7VVzrqGy3BtdQQVL2ujhnjIMbh5OTw8RDT0OT0VCIpMWIVU0pdW5X7FfDIjiVNI7L3U15sraykc8/wB3Yp+N5bGw8y0niz2c885yuT8ek8S/cSSfzpkv6VXq2NhG1sUbWMaMNa0YAHoAXyRa6XEa+e2VLTdot+LbLt1S4E2ko0qfHfT3bIiIrUdQIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgC908M1RPHT08Uk00jgxkbGlznOJwAAOZJPYvCtz4J9ost03coJbneau31dADW2+Gmjy6sli8t0RcQQ0cDXE56jIBBWniFWqOlmVDV+Sm+zh/y2nuCHlRJDSXwftc6i0vb9QxGgoKerrjSuir5fF5YGNPC6ZzXgZaCCMAlxxyC0W5e0es9CVVyfcLVU1FooZWRi7RQuFNKJACxzXHsOQD3O5ZyrY+ERvHq3T+vJbFY54KWqgghlra2WljnfK+WNsojj8KHCOFjXtaA0AkhxcTlTnae9Um7u0VbS6ts09XTiaaGsoba50XjE8EYnjlgYCAx7hlrmA8JcGuwMkKlvG8YppUFfUKFyYmtF+ZJu6d9L6bOm6ukbXspUTcEO04vRfavjENdUQthmhDJXNEcw/CMwfNdyHlDofSvir+ndXNMIiLJgIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCt34H1Veabf3T7bLeqK0vmc6OqfV44JqcDikhAPVzg3yenPB7FUSLzErqxk7B+HJpu93Ow0lwt9HLLBp26V7rrFGMujZVvbLBUuA/ILWlnEeQLMd6oT4N+nLzft39P1Nra+KmtFdDcrjWnyYqOmheJHyPf0aOFpAz1JAXQWznwhtE3iq0hpC92qXSjrdaW0P9ofumG+DfG0YY7ibh0T+DmJCQHEcvylJL5vntJBpbUk1BqCovFws8jhQWutpY6ejuVRkeDlaynY0TR8Tc5eeWM4Hkla6bhXJsZIv8NWp0xVbWWCCfUE9v1BDVTV1Hp9jstfT1Mz3tfKweY5rPNJxjLm458oj8H630VJt7DcoImGsrp5fGJi0FxDHcLWZ7ABzx+sqp303Tum7WqaXUF2tVtt1RT0bKTho2u8sBxdxOLiSebjgdg5elbHZDcGk014zZr7JIy2VD/DRTNYX+Alxg5A58LgBnHQgHHVQmYqKfUYe4ZOrTTaW9dHnbqJrAKmTT1iim6Jq1+h/9p9ToCGmpIHPdDRUkZeMP4adg4h3HlzHXl0XK+7FsorPuHebfbohFSRVH4Ng6My0OLR6ASQruuW7+jKa21VVQVNRW1cORBTOpnMEzuxxceQZnrnnjsXON1rqm5XKpr6yUzVFRK6WV56uc45JUVlKgq5M6ZNnJwq1rO6u+nXo8+JK5lrKabKglymm73uty+/kYyIivRTgiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAKtDd/UFRe6NtbprQFrZQS1tspKiR7quUScLH1rmngiccc2DOeR6Z2G0V6pbLardNdbrXQUNHTt4pJp3hjR3dT1PYOpPJeRb7hW7oX7UV61TWSw0M4bT2+hqXuaY4OZy8NPCS7OT6PQFtY3g0YM5OW7T5kOnUmVS9kPBqRijqJtN+Rt1ppAQQQQRkEcwR2LW3PSGntQSCW+2GhqpQABJJFh+B0G8cxb7Cy67UNkzEMkqNzXK7tq7L3UiXFQRE1omuqhm5bBHGEgqZhE2cT8VxuknNqFhLZJm4GHmP8ABcfzgD0zk8itpqDRenNRva6+2aGqkZjhkyWSYHQcbcHA7Oeihf8AZfr2OXwNJrbSU8Y6GZzmyD1Zjb9K3UXOM+ipf4MNXyeGVT+Pf71e8mB4JqLpXRvgYTy4s9rqt0+xmmrA5rKq50QPLyIq53+6sWy7CXWJ+bXqiw4DIkfGCPnDfpVv4a3Bs1bCxWV8pxJqhKPnT8isqLO4X2O12eFsFqs1BQxgABkETY2j9gC+N50hpS8yGW66fs9dIernVFKx5/Yop1MzN+FDKjikNv2fGqsNPdLqVNJIp5jmj0tFNbL/dLZM/OQIquRoB9bgcfMseXSmmZgRLp23vB6g0cfxWFXaV05WuL6rT9qlce10lMxx/aFHosCp80q5r+pFui2pPUucPLfVAT6P0uRjGLBSAD1Rpj8FjTaCpVRy0tcYgZrXQue/rJJTMcT85aVg1X2X7O1Du1ptNWA94pJTEfzHvb+5Wqq9iNJsLjb9QVTPyZaVkn1hw/iteNX2d7N58i1K3oWi91dFrfMl6XeRbDqzS5+fS1sP8A5DP4KN1WzWgag+dpqiqovyCQPDvUQfqWlk7GtXt8ms0w7vM0oH+jlhVeimKMzpR13O1i/Rj+S90jVKlubWxp+XzO2YtpaHkz0EDj2maJp/iVJLBtPs7XBtXWX+j7vKNMx/Zx+pWlF+XJjkJGSXHqcnJJVhV2RlG9lpbqiJTcblOp09v5Iya2vvNTLCHczDE0PH6w+laJaVERbJkCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAKe6V09ZtXWr7m3qi8c8J4RVQkNlhz1w4EEEHsIPMArJRExi7DZNWKuaKnZbpuSKVbR7Lao07UG5N1JW1zhHI9r6gtjhY7i8h7Ixnjx1ycd62F8+HLs1bz/xVLpqy1dvmqYJi6agp+MkxOH6xDHnOWAnkCupkWE8VqakneUlv6GfRcGpqOVX1K3p6M8Ttt6j1Dq2mvVk1DVaes1e2mloI6V7GRQ0kdNNDJHxsB4sNeGAHqeEZAyCtrrXS1jpJuirrfWXqUXHSNPMKl11nqJJp4WvZxNmklLXOicGt4XPJwQCXF2Sd4ItqOKVlLK6JU45UkpPdstHifRR7TbE6W0ybJb4rXbYLVTWCCBrnxxRR08bGB52ue7HFl2XZ5nOegANwjd8GVf6oP7kpe/gyrXVB/clL38GVa6oP7kpe/gyrSMUr7Vl3mOuuSSijb/AI7as/rH/nH+at7trqXU2pbBp+3X7VVzrqGy3BtdQQVL2ujhnjIMbh5OTw8RDT0OT0VCIpMWIVU0pdW5X7FfDIjiVNI7L3U15sraykc8/wB3Yp+N5bGw8y0niz2c885yuT8ek8S/cSSfzpkv6VXq2NhG1sUbWMaMNa0YAHoAXyRa6XEa+e2VLTdot+LbLt1S4E2ko0qfHfT3bIiIrUdQIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgC908M1RPHT08Uk00jgxkbGlznOJwAAOZJPYvCtz4J9ost03coJbneau31dADW2+Gmjy6sli8t0RcQQ0cDXE56jIBBWniFWqOlmVDV+Sm+zh/y2nuCHlRJDSXwftc6i0vb9QxGgoKerrjSuir5fF5YGNPC6ZzXgZaCCMAlxxyC0W5e0es9CVVyfcLVU1FooZWRi7RQuFNKJACxzXHsOQD3O5ZyrY+ERvHq3T+vJbFY54KWqgghlra2WljnfK+WNsojj8KHCOFjXtaA0AkhxcTlTnae9Um7u0VbS6ts09XTiaaGsoba50XjE8EYnjlgYCAx7hlrmA8JcGuwMkKlvG8YppUFfUKFyYmtF+ZJu6d9L6bOm6ukbXspUTcEO04vRfavjENdUQthmhDJXNEcw/CMwfNdyHlDofSvir+ndXNMIiLJgIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCt34H1Veabf3T7bLeqK0vmc6OqfV44JqcDikhAPVzg3yenPB7FUSLzErqxk7B+HJpu93Ow0lwt9HLLBp26V7rrFGMujZVvbLBUuA/ILWlnEeQLMd6oT4N+nLzft39P1Nra+KmtFdDcrjWnyYqOmheJHyPf0aOFpAz1JAXQWznwhtE3iq0hpC92qXSjrdaW0P9ofumG+DfG0YY7ibh0T+DmJCQHEcvylJL5vntJBpbUk1BqCovFws8jhQWutpY6ejuVRkeDlaynY0TR8Tc5eeWM4Hkla6bhXJsZIv8NWp0xVbWWCCfUE9v1BDVTV1Hp9jstfT1Mz3tfKweY5rPNJxjLm458oj8H630VJt7DcoImGsrp5fGJi0FxDHcLWZ7ABzx+sqp303Tum7WqaXUF2tVtt1RT0bKTho2u8sBxdxOLiSebjgdg5elbHZDcGk014zZr7JIy2VD/DRTNYX+Alxg5A58LgBnHQgHHVQmYqKfUYe4ZOrTTaW9dHnbqJrAKmTT1iim6Jq1+h/9p9ToCGmpIHPdDRUkZeMP4adg4h3HlzHXl0XK+7FsorPuHebfbohFSRVH4Ng6My0OLR6ASQruuW7+jKa21VVQVNRW1cORBTOpnMEzuxxceQZnrnnjsXON1rqm5XKpr6yUzVFRK6WV56uc45JUVlKgq5M6ZNnJwq1rO6u+nXo8+JK5lrKabKglymm73uty+/kYyIivRTgiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAKtDd/UFRe6NtbprQFrZQS1tspKiR7quUScLH1rmngiccc2DOeR6Z2G0V6pbLardNdbrXQUNHTt4pJp3hjR3dT1PYOpPJeRb7hW7oX7UV61TWSw0M4bT2+hqXuaY4OZy8NPCS7OT6PQFtY3g0YM5OW7T5kOnUmVS9kPBqRijqJtN+Rt1ppAQQQQRkEcwR2LW3PSGntQSCW+2GhqpQABJJFh+B0G8cxb7Cy67UNkzEMkqNzXK7tq7L3UiXFQRE1omuqhm5bBHGEgqZhE2cT8VxuknNqFhLZJm4GHmP8ABcfzgD0zk8itpqDRenNRva6+2aGqkZjhkyWSYHQcbcHA7Oeihf8AZfr2OXwNJrbSU8Y6GZzmyD1Zjb9K3UXOM+ipf4MNXyeGVT+Pf71e8mB4JqLpXRvgYTy4s9rqt0+xmmrA5rKq50QPLyIq53+6sWy7CXWJ+bXqiw4DIkfGCPnDfpVv4a3Bs1bCxWV8pxJqhKPnT8isqLO4X2O12eFsFqs1BQxgABkETY2j9gC+N50hpS8yGW66fs9dIernVFKx5/Yop1MzN+FDKjikNv2fGqsNPdLqVNJIp5jmj0tFNbL/dLZM/OQIquRoB9bgcfMseXSmmZgRLp23vB6g0cfxWFXaV05WuL6rT9qlce10lMxx/aFHosCp80q5r+pFui2pPUucPLfVAT6P0uRjGLBSAD1Rpj8FjTaCpVRy0tcYgZrXQue/rJJTMcT85aVg1X2X7O1Du1ptNWA94pJTEfzHvb+5Wqq9iNJsLjb9QVTPyZaVkn1hw/iteNX2d7N58i1K3oWi91dFrfMl6XeRbDqzS5+fS1sP8A5DP4KN1WzWgag+dpqiqovyCQPDvUQfqWlk7GtXt8ms0w7vM0oH+jlhVeimKMzpR13O1i/Rj+S90jVKlubWxp+XzO2YtpaHkz0EDj2maJp/iVJLBtPs7XBtXWX+j7vKNMx/Zx+pWlF+XJjkJGSXHqcnJJVhV2RlG9lpbqiJTcblOp09v5Iya2vvNTLCHczDE0PH6w+laJaVERbJkCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAKe6V09ZtXWr7m3qi8c8J4RVQkNlhz1w4EEEHsIPMArJRExi7DZNWKuaKnZbpuSKVbR7Lao07UG5N1JW1zhHI9r6gtjhY7i8h7Ixnjx1ycd62F8+HLs1bz/xVLpqy1dvmqYJi6agp+MkxOH6xDHnOWAnkCupkWE8VqakneUlv6GfRcGpqOVX1K3p6M8Ttt6j1Dq2mvVk1DVaes1e2mloI6V7GRQ0kdNNDJHxsB4sNeGAHqeEZAyCtrrXS1jpJuirrfWXqUXHSNPMKl11nqJJp4WvZxNmklLXOicGt4XPJwQCXF2Sd4ItqOKVlLK6JU45UkpPdstHifRR7TbE6W0ybJb4rXbYLVTWCCBrnxxRR08bGB52ue7HFl2XZ5nOegANwjd8GVf6oP7kpe/gyrXVB/clL38GVa6oP7kpe/gyrSMUr7Vl3mOuuSSijb/AI7as/rH/nH+at7trqXU2pbBp+3X7VVzrqGy3BtdQQVL2ujhnjIMbh5OTw8RDT0OT0VCIpMWIVU0pdW5X7FfDIjiVNI7L3U15sraykc8/wB3Yp+N5bGw8y0niz2c885yuT8ek8S/cSSfzpkv6VXq2NhG1sUbWMaMNa0YAHoAXyRa6XEa+e2VLTdot+LbLt1S4E2ko0qfHfT3bIiIrUdQIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgC908M1RPHT08Uk00jgxkbGlznOJwAAOZJPYvCtz4J9ost03coJbneau31dADW2+Gmjy6sli8t0RcQQ0cDXE56jIBBWniFWqOlmVDV+Sm+zh/y2nuCHlRJDSXwftc6i0vb9QxGgoKerrjSuir5fF5YGNPC6ZzXgZaCCMAlxxyC0W5e0es9CVVyfcLVU1FooZWRi7RQuFNKJACxzXHsOQD3O5ZyrY+ERvHq3T+vJbFY54KWqgghlra2WljnfK+WNsojj8KHCOFjXtaA0AkhxcTlTnae9Um7u0VbS6ts09XTiaaGsoba50XjE8EYnjlgYCAx7hlrmA8JcGuwMkKlvG8YppUFfUKFyYmtF+ZJu6d9L6bOm6ukbXspUTcEO04vRfavjENdUQthmhDJXNEcw/CMwfNdyHlDofSvir+ndXNMIiLJgIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCt34H1Veabf3T7bLeqK0vmc6OqfV44JqcDikhAPVzg3yenPB7FUSLzErqxk7B+HJpu93Ow0lwt9HLLBp26V7rrFGMujZVvbLBUuA/ILWlnEeQLMd6oT4N+nLzft39P1Nra+KmtFdDcrjWnyYqOmheJHyPf0aOFpAz1JAXQWznwhtE3iq0hpC92qXSjrdaW0P9ofumG+DfG0YY7ibh0T+DmJCQHEcvylJL5vntJBpbUk1BqCovFws8jhQWutpY6ejuVRkeDlaynY0TR8Tc5eeWM4Hkla6bhXJsZIv8NWp0xVbWWCCfUE9v1BDVTV1Hp9jstfT1Mz3tfKweY5rPNJxjLm458oj8H630VJt7DcoImGsrp5fGJi0FxDHcLWZ7ABzx+sqp303Tum7WqaXUF2tVtt1RT0bKTho2u8sBxdxOLiSebjgdg5elbHZDcGk014zZr7JIy2VD/DRTNYX+Alxg5A58LgBnHQgHHVQmYqKfUYe4ZOrTTaW9dHnbqJrAKmTT1iim6Jq1+h/9p9ToCGmpIHPdDRUkZeMP4adg4h3HlzHXl0XK+7FsorPuHebfbohFSRVH4Ng6My0OLR6ASQruuW7+jKa21VVQVNRW1cORBTOpnMEzuxxceQZnrnnjsXON1rqm5XKpr6yUzVFRK6WV56uc45JUVlKgq5M6ZNnJwq1rO6u+nXo8+JK5lrKabKglymm73uty+/kYyIivRTgiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAKtDd/UFRe6NtbprQFrZQS1tspKiR7quUScLH1rmngiccc2DOeR6Z2G0V6pbLardNdbrXQUNHTt4pJp3hjR3dT1PYOpPJeRb7hW7oX7UV61TWSw0M4bT2+hqXuaY4OZy8NPCS7OT6PQFtY3g0YM5OW7T5kOnUmVS9kPBqRijqJtN+Rt1ppAQQQQRkEcwR2LW3PSGntQSCW+2GhqpQABJJFh+B0G8cxb7Cy67UNkzEMkqNzXK7tq7L3UiXFQRE1omuqhm5bBHGEgqZhE2cT8VxuknNqFhLZJm4GHmP8ABcfzgD0zk8itpqDRenNRva6+2aGqkZjhkyWSYHQcbcHA7Oeihf8AZfr2OXwNJrbSU8Y6GZzmyD1Zjb9K3UXOM+ipf4MNXyeGVT+Pf71e8mB4JqLpXRvgYTy4s9rqt0+xmmrA5rKq50QPLyIq53+6sWy7CXWJ+bXqiw4DIkfGCPnDfpVv4a3Bs1bCxWV8pxJqhKPnT8isqLO4X2O12eFsFqs1BQxgABkETY2j9gC+N50hpS8yGW66fs9dIernVFKx5/Yop1MzN+FDKjikNv2fGqsNPdLqVNJIp5jmj0tFNbL/dLZM/OQIquRoB9bgcfMseXSmmZgRLp23vB6g0cfxWFXaV05WuL6rT9qlce10lMxx/aFHosCp80q5r+pFui2pPUucPLfVAT6P0uRjGLBSAD1Rpj8FjTaCpVRy0tcYgZrXQue/rJJTMcT85aVg1X2X7O1Du1ptNWA94pJTEfzHvb+5Wqq9iNJsLjb9QVTPyZaVkn1hw/iteNX2d7N58i1K3oWi91dFrfMl6XeRbDqzS5+fS1sP8A5DP4KN1WzWgag+dpqiqovyCQPDvUQfqWlk7GtXt8ms0w7vM0oH+jlhVeimKMzpR13O1i/Rj+S90jVKlubWxp+XzO2YtpaHkz0EDj2maJp/iVJLBtPs7XBtXWX+j7vKNMx/Zx+pWlF+XJjkJGSXHqcnJJVhV2RlG9lpbqiJTcblOp09v5Iya2vvNTLCHczDE0PH6w+laJaVERbJkCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAKe6V09ZtXWr7m3qi8c8J4RVQkNlhz1w4EEEHsIPMArJRExi7DZNWKuaKnZbpuSKVbR7Lao07UG5N1JW1zhHI9r6gtjhY7i8h7Ixnjx1ycd62F8+HLs1bz/xVLpqy1dvmqYJi6agp+MkxOH6xDHnOWAnkCupkWE8VqakneUlv6GfRcGpqOVX1K3p6M8Ttt6j1Dq2mvVk1DVaes1e2mloI6V7GRQ0kdNNDJHxsB4sNeGAHqeEZAyCtrrXS1jpJuirrfWXqUXHSNPMKl11nqJJp4WvZxNmklLXOicGt4XPJwQCXF2Sd4ItqOKVlLK6JU45UkpPdstHifRR7TbE6W0ybJb4rXbYLVTWCCBrnxxRR08bGB52ue7HFl2XZ5nOegANwjd8GVf6oP7kpe/gyrXVB/clL38GVa6oP7kpe/gyrSMUr7Vl3mOuuSSijb/AI7as/rH/nH+at7trqXU2pbBp+3X7VVzrqGy3BtdQQVL2ujhnjIMbh5OTw8RDT0OT0VCIpMWIVU0pdW5X7FfDIjiVNI7L3U15sraykc8/wB3Yp+N5bGw8y0niz2c885yuT8ek8S/cSSfzpkv6VXq2NhG1sUbWMaMNa0YAHoAXyRa6XEa+e2VLTdot+LbLt1S4E2ko0qfHfT3bIiIrUdQIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiID//Z";

const PROTEIN_FACTOR = {
  3: 0.72,
  4: 0.55,
  5: 0.45,
};

const T = {
  es: {
    appTitle: "Natur Training System",
    appSubtitle: "Planificador de Platos",
    tabConsulta: "Consulta alimento",
    tabReparto: "Planificador de plato",
    copyright: "Natur Training System. Todos los derechos reservados.",
    onboardTitle: "Datos personales",
    onboardDesc: "Para calcular la proteína óptima por comida, indícanos tus datos.",
    labelPeso: "Peso corporal",
    labelComidas: "Comidas al día",
    unitKg: "kg",
    pesoPlaceholder: "Ej: 75",
    btnConfirmar: "Confirmar",
    errorPeso: "Introduce un peso válido (10–300 kg).",
    errorComidas: "Selecciona 3, 4 o 5 comidas.",
    changeData: "Cambiar datos",
    placeholder: "Ej: arroz blanco cocido, pechuga de pollo...",
    btnConsultar: "Consultar",
    per100g: "Por 100 g · BEDCA",
    orientativo: "Datos orientativos basados en tablas de composición BEDCA",
    errorNotFound: (q) => `No se encontraron datos para "${q}". Prueba con un nombre más específico.`,
    errorGeneric: "Error al consultar. Inténtalo de nuevo.",
    macros: [
      { key: "energia_kcal",    label: "Calorías",      unit: "kcal" },
      { key: "carbohidratos_g", label: "Carbohidratos", unit: "g"   },
      { key: "proteinas_g",     label: "Proteínas",     unit: "g"   },
      { key: "grasas_g",        label: "Grasas",        unit: "g"   },
      { key: "fibra_g",         label: "Fibra",         unit: "g"   },
    ],
    macroLabels: {
      energia_kcal: "Calorías", carbohidratos_g: "Carbohidratos",
      proteinas_g: "Proteínas", grasas_g: "Grasas", fibra_g: "Fibra",
    },
    macroUnits: {
      energia_kcal: "kcal", carbohidratos_g: "g",
      proteinas_g: "g", grasas_g: "g", fibra_g: "g",
    },
    modeLabel: "Objetivo del plato",
    modeKcal: "Solo kcal",
    modeCarbs: "Carbs + kcal",
    modeProt: "Proteínas + kcal",
    chatIngredientes: "¿Qué ingredientes quieres usar?",
    chatMacro: { carbs: "¿Cuántos gramos de carbohidratos quieres?", prot: "¿Cuántos gramos de proteínas quieres?" },
    chatKcal: "¿Cuántas kcal totales quieres para el plato?",
    chatKcalOnly: "¿Cuántas kcal quieres que tenga el plato?",
    placeholderIngredientes: "Ej: arroz blanco, pollo, brócoli",
    placeholderMacro: { carbs: "Ej: 60", prot: "Ej: 40" },
    placeholderKcal: "Ej: 500",
    unitMacro: { carbs: "g carbs", prot: "g proteínas" },
    btnSiguiente: "Siguiente",
    btnCalcular: "Calcular",
    btnNuevoPlato: "Nuevo plato",
    kcalTotales: (n) => `${n} kcal totales`,
    objetivoDual: (macro, unit, kcal) => `· ${macro} g ${unit} · ${kcal} kcal objetivo`,
    objetivoKcal: (n) => `· objetivo: ${n} kcal`,
    totalesPlato: "Totales del plato",
    errorCalc: "Error al calcular. Inténtalo de nuevo.",
    loading: "...",
    summaryWeight: "Peso",
    summaryMeals: "Comidas/día",
    summaryProtein: "Proteína/comida",
  },
  en: {
    appTitle: "Natur Training System",
    appSubtitle: "Planificador de Platos",
    tabConsulta: "Food lookup",
    tabReparto: "Dish planner",
    copyright: "Natur Training System. All rights reserved.",
    onboardTitle: "Personal data",
    onboardDesc: "To calculate optimal protein per meal, tell us your details.",
    labelPeso: "Body weight",
    labelComidas: "Meals per day",
    unitKg: "kg",
    pesoPlaceholder: "E.g.: 75",
    btnConfirmar: "Confirm",
    errorPeso: "Enter a valid weight (10–300 kg).",
    errorComidas: "Select 3, 4 or 5 meals.",
    changeData: "Change data",
    placeholder: "E.g.: cooked white rice, chicken breast...",
    btnConsultar: "Look up",
    per100g: "Per 100 g · BEDCA",
    orientativo: "Indicative data based on BEDCA food composition tables",
    errorNotFound: (q) => `No data found for "${q}". Try a more specific name.`,
    errorGeneric: "Query error. Please try again.",
    macros: [
      { key: "energia_kcal",    label: "Calories", unit: "kcal" },
      { key: "carbohidratos_g", label: "Carbs",    unit: "g"   },
      { key: "proteinas_g",     label: "Protein",  unit: "g"   },
      { key: "grasas_g",        label: "Fat",      unit: "g"   },
      { key: "fibra_g",         label: "Fibre",    unit: "g"   },
    ],
    macroLabels: {
      energia_kcal: "Calories", carbohidratos_g: "Carbs",
      proteinas_g: "Protein", grasas_g: "Fat", fibra_g: "Fibre",
    },
    macroUnits: {
      energia_kcal: "kcal", carbohidratos_g: "g",
      proteinas_g: "g", grasas_g: "g", fibra_g: "g",
    },
    modeLabel: "Dish target",
    modeKcal: "Kcal only",
    modeCarbs: "Carbs + kcal",
    modeProt: "Protein + kcal",
    chatIngredientes: "Which ingredients do you want to use?",
    chatMacro: { carbs: "How many grams of carbs do you want?", prot: "How many grams of protein do you want?" },
    chatKcal: "How many total kcal should the dish have?",
    chatKcalOnly: "How many kcal should the dish have?",
    placeholderIngredientes: "E.g.: white rice, chicken, broccoli",
    placeholderMacro: { carbs: "E.g.: 60", prot: "E.g.: 40" },
    placeholderKcal: "E.g.: 500",
    unitMacro: { carbs: "g carbs", prot: "g protein" },
    btnSiguiente: "Next",
    btnCalcular: "Calculate",
    btnNuevoPlato: "New dish",
    kcalTotales: (n) => `${n} kcal total`,
    objetivoDual: (macro, unit, kcal) => `· ${macro} g ${unit} · ${kcal} kcal target`,
    objetivoKcal: (n) => `· target: ${n} kcal`,
    totalesPlato: "Dish totals",
    errorCalc: "Calculation error. Please try again.",
    loading: "...",
    summaryWeight: "Weight",
    summaryMeals: "Meals/day",
    summaryProtein: "Protein/meal",
  },
};

const SYSTEM_CONSULTA = () =>
  `You are a nutrition expert with knowledge of the Spanish Food Composition Database (BEDCA).
When the user names a food, return ONLY a JSON object with nutritional data per 100 g.
Exact structure:
{
  "alimento": "official name",
  "encontrado": true,
  "energia_kcal": number,
  "carbohidratos_g": number,
  "proteinas_g": number,
  "grasas_g": number,
  "fibra_g": number,
  "nota": "brief optional note"
}
If no reliable data: encontrado: false and the rest null.
Return ONLY the JSON, no backticks or extra text.`;

const SYSTEM_REPARTO = () =>
  `You are a nutrition expert with knowledge of the Spanish Food Composition Database (BEDCA).
The user gives you a list of ingredients plus one or two constraints (total kcal, total carbs, or total protein).
Calculate how many grams of each ingredient are needed to satisfy ALL constraints simultaneously, distributing in a balanced and realistic way.
IMPORTANT: Each ingredient must appear ONLY ONCE.
Return ONLY a JSON object with this exact structure:
{
  "plato": "descriptive dish name",
  "calorias_objetivo": number,
  "calorias_total": number,
  "ingredientes": [
    {
      "nombre": "official BEDCA name",
      "gramos": number,
      "energia_kcal": number,
      "carbohidratos_g": number,
      "proteinas_g": number,
      "grasas_g": number,
      "fibra_g": number
    }
  ],
  "totales": {
    "energia_kcal": number,
    "carbohidratos_g": number,
    "proteinas_g": number,
    "grasas_g": number,
    "fibra_g": number
  },
  "nota": "brief optional note"
}
All nutritional values per ingredient must correspond to the indicated grams (not per 100 g).
Return ONLY the JSON, no backticks or extra text.`;

async function llamarAPI(system, userContent) {
  const res = await fetch("/api/claude", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-5",
      max_tokens: 1200,
      system,
      messages: [{ role: "user", content: userContent }],
    }),
  });
  const data = await res.json();
  const raw = data.content?.find((b) => b.type === "text")?.text || "";
  return JSON.parse(raw.replace(/```json|```/g, "").trim());
}

function LangToggle({ lang, setLang }) {
  return (
    <div style={{ display: "flex", gap: 4 }}>
      {["es", "en"].map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          style={{
            padding: "4px 10px", fontSize: 12,
            fontWeight: lang === l ? 600 : 400,
            border: "1px solid",
            borderColor: lang === l ? "#555" : "#ccc",
            borderRadius: 6,
            background: lang === l ? "#fff" : "transparent",
            cursor: "pointer",
          }}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function ModeSelector({ t, mode, setMode }) {
  const modes = [
    { id: "kcal",  label: t.modeKcal  },
    { id: "carbs", label: t.modeCarbs },
    { id: "prot",  label: t.modeProt  },
  ];
  return (
    <div style={{ display: "flex", gap: 6, marginBottom: "1rem", flexWrap: "wrap" }}>
      {modes.map((m) => (
        <button
          key={m.id}
          onClick={() => setMode(m.id)}
          style={{
            padding: "6px 14px", fontSize: 12,
            fontWeight: mode === m.id ? 600 : 400,
            border: "1px solid",
            borderColor: mode === m.id ? "#333" : "#ddd",
            borderRadius: 8,
            background: mode === m.id ? "#333" : "transparent",
            color: mode === m.id ? "#fff" : "#333",
            cursor: "pointer",
          }}
        >
          {m.label}
        </button>
      ))}
    </div>
  );
}

function Copyright({ text }) {
  return (
    <p style={{
      fontSize: 11, color: "#bbb", margin: "14px 0 0",
      textAlign: "center", borderTop: "1px solid #eee", paddingTop: 10,
    }}>
      {text}
    </p>
  );
}

function Onboarding({ t, onConfirm }) {
  const [peso, setPeso] = useState("");
  const [comidas, setComidas] = useState("");
  const [err, setErr] = useState("");

  function confirm() {
    const p = parseFloat(peso);
    const c = parseInt(comidas, 10);
    if (isNaN(p) || p < 10 || p > 300) { setErr(t.errorPeso); return; }
    if (![3, 4, 5].includes(c)) { setErr(t.errorComidas); return; }
    setErr("");
    const protPorComida = Math.round(p * PROTEIN_FACTOR[c]);
    onConfirm({ peso: p, comidas: c, protPorComida });
  }

  return (
    <div style={{
      background: "#fafafa", border: "1px solid #e8e8e8",
      borderRadius: 14, padding: "1.4rem 1.2rem", marginBottom: "1.25rem",
    }}>
      <p style={{ fontSize: 15, fontWeight: 600, margin: "0 0 4px" }}>{t.onboardTitle}</p>
      <p style={{ fontSize: 13, color: "#888", margin: "0 0 1rem" }}>{t.onboardDesc}</p>
      <label style={{ display: "block", fontSize: 12, color: "#555", marginBottom: 4 }}>
        {t.labelPeso}
      </label>
      <div style={{ display: "flex", gap: 6, marginBottom: "1rem", alignItems: "center" }}>
        <input
          type="number" min="10" max="300" value={peso}
          onChange={(e) => setPeso(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && confirm()}
          placeholder={t.pesoPlaceholder}
          style={{ flex: 1, fontSize: 15, padding: "8px 12px", border: "1px solid #ddd", borderRadius: 8 }}
        />
        <span style={{ fontSize: 14, color: "#888" }}>{t.unitKg}</span>
      </div>
      <label style={{ display: "block", fontSize: 12, color: "#555", marginBottom: 6 }}>
        {t.labelComidas}
      </label>
      <div style={{ display: "flex", gap: 8, marginBottom: "1rem" }}>
        {[3, 4, 5].map((n) => (
          <button
            key={n}
            onClick={() => setComidas(String(n))}
            style={{
              flex: 1, padding: "10px 0", fontSize: 16, fontWeight: 500,
              border: "1px solid",
              borderColor: comidas === String(n) ? "#333" : "#ddd",
              borderRadius: 10,
              background: comidas === String(n) ? "#333" : "#fff",
              color: comidas === String(n) ? "#fff" : "#333",
              cursor: "pointer",
            }}
          >
            {n}
          </button>
        ))}
      </div>
      {err && <p style={{ fontSize: 12, color: "#c0392b", margin: "0 0 10px" }}>{err}</p>}
      <button
        onClick={confirm}
        style={{
          width: "100%", padding: "10px 0", fontSize: 14, fontWeight: 500,
          border: "none", borderRadius: 10,
          background: "#333", color: "#fff", cursor: "pointer",
        }}
      >
        {t.btnConfirmar}
      </button>
      <div style={{
        marginTop: "1rem", padding: "10px 12px",
        background: "#f0f4ff", borderRadius: 8,
        fontSize: 12, color: "#555", lineHeight: 1.6,
      }}>
        <strong>Fórmula PRO:</strong>
        {" "}5 comidas → 0,45 g/kg &nbsp;·&nbsp; 4 comidas → 0,55 g/kg &nbsp;·&nbsp; 3 comidas → 0,72 g/kg
      </div>
    </div>
  );
}

function ProteinBanner({ t, userData, onCambiar }) {
  const { peso, comidas, protPorComida } = userData;
  const protGxKg = (protPorComida / peso).toFixed(2);

  const items = [
    { label: t.summaryWeight,  value: `${peso} kg`,        sub: null },
    { label: t.summaryMeals,   value: comidas,              sub: null },
    { label: t.summaryProtein, value: `${protPorComida} g`, sub: `${protGxKg} g/kg` },
  ];

  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 10,
      background: "#f0fff4", border: "1px solid #b7dfc7",
      borderRadius: 10, padding: "10px 14px", marginBottom: "1rem",
      flexWrap: "wrap",
    }}>
      <div style={{ display: "flex", gap: 16, flex: 1, flexWrap: "wrap" }}>
        {items.map((item) => (
          <div key={item.label}>
            <p style={{ fontSize: 10, color: "#6a9c7a", margin: 0, textTransform: "uppercase", letterSpacing: "0.04em" }}>
              {item.label}
            </p>
            <p style={{ fontSize: 16, fontWeight: 600, margin: 0, color: "#2d5a40" }}>
              {item.value}
            </p>
            {item.sub && (
              <p style={{ fontSize: 10, color: "#6a9c7a", margin: "1px 0 0" }}>
                {item.sub}
              </p>
            )}
          </div>
        ))}
      </div>
      <button
        onClick={onCambiar}
        style={{
          fontSize: 12, padding: "4px 10px",
          border: "1px solid #b7dfc7", borderRadius: 6,
          background: "transparent", color: "#3a7d52", cursor: "pointer",
        }}
      >
        {t.changeData}
      </button>
    </div>
  );
}

function TabConsulta({ lang }) {
  const t = T[lang];
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function consultar() {
    if (!query.trim()) return;
    setLoading(true); setResult(null); setError("");
    try {
      const parsed = await llamarAPI(SYSTEM_CONSULTA(), query.trim());
      if (!parsed.encontrado) setError(t.errorNotFound(query));
      else setResult(parsed);
    } catch { setError(t.errorGeneric); }
    finally { setLoading(false); }
  }

  return (
    <>
      <div style={{ display: "flex", gap: 8, marginBottom: "1.25rem" }}>
        <input
          type="text" value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && consultar()}
          placeholder={t.placeholder}
          style={{ flex: 1, fontSize: 14, padding: "8px 12px", border: "1px solid #ddd", borderRadius: 8 }}
        />
        <button
          onClick={consultar} disabled={loading}
          style={{ padding: "0 18px", fontSize: 14, whiteSpace: "nowrap", borderRadius: 8, border: "1px solid #ddd", cursor: "pointer" }}
        >
          {loading ? t.loading : t.btnConsultar}
        </button>
      </div>
      {error && (
        <div style={{ background: "#fff8e1", border: "1px solid #ffe082", borderRadius: 8, padding: "10px 14px", fontSize: 13, color: "#795548", marginBottom: 12 }}>
          {error}
        </div>
      )}
      {result && (
        <>
          <div style={{ background: "#fff", border: "1px solid #eee", borderRadius: 12, padding: "0.9rem 1.1rem", marginBottom: 12 }}>
            <p style={{ fontSize: 15, fontWeight: 500, margin: "0 0 2px" }}>{result.alimento}</p>
            <p style={{ fontSize: 12, color: "#888", margin: 0 }}>{t.per100g}</p>
            {result.nota && <p style={{ fontSize: 12, color: "#aaa", margin: "5px 0 0" }}>{result.nota}</p>}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, minmax(0,1fr))", gap: 8 }}>
            {t.macros.map((m) => (
              <div key={m.key} style={{ background: "#f5f5f5", borderRadius: 8, padding: "10px 6px", textAlign: "center" }}>
                <p style={{ fontSize: 10, color: "#888", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.04em" }}>{m.label}</p>
                <p style={{ fontSize: 20, fontWeight: 500, margin: 0 }}>
                  {m.key === "energia_kcal" ? Math.round(result[m.key]) : Number(result[m.key]).toFixed(1)}
                </p>
                <p style={{ fontSize: 11, color: "#888", margin: 0 }}>{m.unit}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 11, color: "#bbb", marginTop: 10, textAlign: "right" }}>{t.orientativo}</p>
          <Copyright text={t.copyright} />
        </>
      )}
    </>
  );
}

const S = { ING: "ing", MACRO: "macro", KCAL: "kcal", RES: "res" };

function TabReparto({ lang, userData, onCambiarDatos }) {
  const t = T[lang];
  const { protPorComida } = userData;
  const totalKeys    = ["energia_kcal", "carbohidratos_g", "proteinas_g", "grasas_g", "fibra_g"];
  const ingMacroKeys = ["carbohidratos_g", "proteinas_g", "grasas_g", "fibra_g"];

  const [mode, setMode] = useState("prot");
  const [step, setStep] = useState(S.ING);
  const [ingredientes, setIngredientes] = useState("");
  const [macro, setMacro] = useState("");
  const [kcal, setKcal] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function resetAll(newMode) {
    setMode(newMode ?? mode);
    setStep(S.ING); setIngredientes(""); setMacro(""); setKcal("");
    setResult(null); setError("");
  }

  function nextFromIng() {
    if (!ingredientes.trim()) return;
    if (mode === "kcal" || mode === "prot") setStep(S.KCAL);
    else setStep(S.MACRO);
  }

  async function calcular() {
    if (!kcal.trim()) return;
    setLoading(true); setResult(null); setError("");
    try {
      let prompt = "";
      if (mode === "kcal") {
        prompt = `Target: ${kcal.trim()} kcal total. Distribute the ingredients to reach this calorie target in a balanced way. Ingredients: ${ingredientes.trim()}`;
      } else if (mode === "carbs") {
        prompt = `Constraints: exactly ${macro.trim()} g of carbohydrates AND ${kcal.trim()} kcal total. Satisfy BOTH simultaneously. Ingredients: ${ingredientes.trim()}`;
      } else {
        const protTarget = macro.trim() || String(protPorComida);
        prompt = `Constraints: exactly ${protTarget} g of protein AND ${kcal.trim()} kcal total. Fix protein first, then fill remaining kcal with carbs/fats. Ingredients: ${ingredientes.trim()}`;
      }

      const parsed = await llamarAPI(SYSTEM_REPARTO(), prompt);

      const merged = {};
      for (const ing of parsed.ingredientes) {
        const key = ing.nombre.toLowerCase().trim();
        if (merged[key]) {
          merged[key].gramos          += ing.gramos;
          merged[key].energia_kcal    += ing.energia_kcal;
          merged[key].carbohidratos_g += ing.carbohidratos_g;
          merged[key].proteinas_g     += ing.proteinas_g;
          merged[key].grasas_g        += ing.grasas_g;
          merged[key].fibra_g         += (ing.fibra_g || 0);
        } else {
          merged[key] = { ...ing };
        }
      }
      parsed.ingredientes = Object.values(merged);
      parsed.totales.energia_kcal    = parsed.ingredientes.reduce((s,i) => s + i.energia_kcal, 0);
      parsed.totales.carbohidratos_g = parsed.ingredientes.reduce((s,i) => s + i.carbohidratos_g, 0);
      parsed.totales.proteinas_g     = parsed.ingredientes.reduce((s,i) => s + i.proteinas_g, 0);
      parsed.totales.grasas_g        = parsed.ingredientes.reduce((s,i) => s + i.grasas_g, 0);
      parsed.totales.fibra_g         = parsed.ingredientes.reduce((s,i) => s + (i.fibra_g||0), 0);

      setResult(parsed); setStep(S.RES);
    } catch { setError(t.errorCalc); }
    finally { setLoading(false); }
  }

  const bubbleUser = (text) => (
    <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 8 }}>
      <div style={{ background: "#e3f2fd", borderRadius: 12, padding: "8px 14px", fontSize: 14, color: "#1565c0", maxWidth: "80%" }}>{text}</div>
    </div>
  );
  const bubbleBot = (text) => (
    <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: 8 }}>
      <div style={{ background: "#f5f5f5", borderRadius: 12, padding: "8px 14px", fontSize: 14, maxWidth: "85%" }}>{text}</div>
    </div>
  );

  const inputRow = (value, setter, placeholder, unit, onNext, type = "text", isCalc = false) => (
    <div style={{ display: "flex", gap: 8, marginBottom: "1.25rem", alignItems: "center" }}>
      <input
        type={type} value={value}
        onChange={(e) => setter(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onNext()}
        placeholder={placeholder}
        style={{ flex: 1, fontSize: 14, padding: "8px 12px", border: "1px solid #ddd", borderRadius: 8 }}
        autoFocus
      />
      {unit && <span style={{ fontSize: 13, color: "#888", whiteSpace: "nowrap" }}>{unit}</span>}
      <button
        onClick={onNext} disabled={loading}
        style={{ padding: "0 18px", fontSize: 14, whiteSpace: "nowrap", borderRadius: 8, border: "1px solid #ddd", cursor: "pointer" }}
      >
        {loading && isCalc ? t.loading : isCalc ? t.btnCalcular : t.btnSiguiente}
      </button>
    </div>
  );

  const protLabel = mode === "prot"
    ? (macro.trim() ? `${macro} g proteínas` : `${protPorComida} g proteínas (auto)`)
    : "";

  return (
    <>
      <ProteinBanner t={t} userData={userData} onCambiar={onCambiarDatos} />

      <div style={{ marginBottom: "0.75rem" }}>
        <p style={{ fontSize: 11, color: "#888", margin: "0 0 6px", textTransform: "uppercase", letterSpacing: "0.04em" }}>{t.modeLabel}</p>
        <ModeSelector t={t} mode={mode} setMode={(m) => resetAll(m)} />
      </div>

      <div style={{ marginBottom: 16 }}>
        {bubbleBot(t.chatIngredientes)}
        {step !== S.ING && bubbleUser(ingredientes)}
        {step !== S.ING && mode === "carbs" && bubbleBot(t.chatMacro.carbs)}
        {step !== S.ING && mode === "prot"  && bubbleBot(t.chatMacro.prot)}
        {(step === S.KCAL || step === S.RES) && mode === "carbs" && bubbleUser(`${macro} ${t.unitMacro.carbs}`)}
        {(step === S.KCAL || step === S.RES) && mode === "prot"  && bubbleUser(protLabel)}
        {(step === S.KCAL || step === S.RES) && bubbleBot(mode === "kcal" ? t.chatKcalOnly : t.chatKcal)}
        {step === S.RES && bubbleUser(`${kcal} kcal`)}
      </div>

      {step === S.ING   && inputRow(ingredientes, setIngredientes, t.placeholderIngredientes, null, nextFromIng)}
      {step === S.MACRO && mode === "carbs" && inputRow(macro, setMacro, t.placeholderMacro.carbs, t.unitMacro.carbs, () => macro.trim() && setStep(S.KCAL), "number")}
      {step === S.MACRO && mode === "prot"  && inputRow(macro, setMacro, `${t.placeholderMacro.prot} (auto: ${protPorComida} g)`, t.unitMacro.prot, () => setStep(S.KCAL), "number")}
      {step === S.KCAL  && inputRow(kcal, setKcal, t.placeholderKcal, "kcal", calcular, "number", true)}

      {error && (
        <div style={{ background: "#fff8e1", border: "1px solid #ffe082", borderRadius: 8, padding: "10px 14px", fontSize: 13, color: "#795548", marginBottom: 12 }}>
          {error}
        </div>
      )}

      {result && (
        <>
          <div style={{ background: "#fff", border: "1px solid #eee", borderRadius: 12, padding: "0.9rem 1.1rem", marginBottom: 12 }}>
            <p style={{ fontSize: 15, fontWeight: 500, margin: "0 0 4px" }}>{result.plato}</p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <p style={{ fontSize: 12, color: "#888", margin: 0 }}>{t.kcalTotales(Math.round(result.calorias_total))}</p>
              {mode !== "kcal"
                ? <p style={{ fontSize: 12, color: "#bbb", margin: 0 }}>
                    {t.objetivoDual(mode === "prot" ? (macro || protPorComida) : macro, t.unitMacro[mode === "prot" ? "prot" : "carbs"], kcal)}
                  </p>
                : <p style={{ fontSize: 12, color: "#bbb", margin: 0 }}>{t.objetivoKcal(kcal)}</p>
              }
            </div>
            {result.nota && <p style={{ fontSize: 12, color: "#aaa", margin: "5px 0 0" }}>{result.nota}</p>}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 12 }}>
            {result.ingredientes.map((ing, i) => (
              <div key={i} style={{ background: "#f5f5f5", borderRadius: 8, padding: "10px 14px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
                  <p style={{ fontSize: 14, fontWeight: 500, margin: 0 }}>{ing.nombre}</p>
                  <div style={{ display: "flex", gap: 6, alignItems: "baseline" }}>
                    <p style={{ fontSize: 18, fontWeight: 500, margin: 0 }}>{Math.round(ing.gramos)}</p>
                    <p style={{ fontSize: 12, color: "#888", margin: 0 }}>g</p>
                    <p style={{ fontSize: 12, color: "#bbb", margin: 0 }}>· {Math.round(ing.energia_kcal)} kcal</p>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0,1fr))", gap: 4 }}>
                  {ingMacroKeys.map((k) => (
                    <div key={k} style={{ textAlign: "center" }}>
                      <p style={{ fontSize: 9, color: "#bbb", margin: "0 0 1px", textTransform: "uppercase", letterSpacing: "0.04em" }}>{t.macroLabels[k]}</p>
                      <p style={{ fontSize: 13, fontWeight: 500, margin: 0 }}>{Number(ing[k]).toFixed(1)}g</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: "#fff", border: "1px solid #eee", borderRadius: 8, padding: "10px 14px", marginBottom: 12 }}>
            <p style={{ fontSize: 12, fontWeight: 500, color: "#888", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: "0.04em" }}>{t.totalesPlato}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, minmax(0,1fr))", gap: 4 }}>
              {totalKeys.map((k) => {
                const val = k === "energia_kcal"
                  ? Math.round(result.totales[k])
                  : Number(result.totales[k]).toFixed(1);
                const gxkg = (k === "proteinas_g" || k === "carbohidratos_g")
                  ? (result.totales[k] / userData.peso).toFixed(2)
                  : null;
                return (
                  <div key={k} style={{ textAlign: "center" }}>
                    <p style={{ fontSize: 9, color: "#888", margin: "0 0 2px", textTransform: "uppercase", letterSpacing: "0.04em" }}>{t.macroLabels[k]}</p>
                    <p style={{ fontSize: k === "energia_kcal" ? 18 : 16, fontWeight: 600, margin: 0,
                      color: k === "proteinas_g" ? "#2d5a40" : k === "carbohidratos_g" ? "#1a5276" : "inherit" }}>
                      {val}
                    </p>
                    <p style={{ fontSize: 11, color: "#888", margin: 0 }}>{t.macroUnits[k]}</p>
                    {gxkg && (
                      <p style={{ fontSize: 9, color: k === "proteinas_g" ? "#6a9c7a" : "#5b8ab0", margin: "2px 0 0", fontWeight: 500 }}>
                        {gxkg} g/kg
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ fontSize: 11, color: "#bbb", margin: 0 }}>{t.orientativo}</p>
            <button
              onClick={() => resetAll()}
              style={{ fontSize: 12, padding: "5px 12px", borderRadius: 6, border: "1px solid #ddd", cursor: "pointer" }}
            >
              {t.btnNuevoPlato}
            </button>
          </div>
          <Copyright text={t.copyright} />
        </>
      )}
    </>
  );
}

export default function NutricionBEDCA() {
  const [tab, setTab] = useState("consulta");
  const [lang, setLang] = useState("es");
  const [userData, setUserData] = useState(null);
  const t = T[lang];

  const tabStyle = (active) => ({
    padding: "7px 16px", fontSize: 13,
    fontWeight: active ? 600 : 400,
    border: "1px solid",
    borderColor: active ? "#555" : "#ddd",
    borderRadius: 8,
    background: active ? "#fff" : "transparent",
    cursor: "pointer",
  });

  return (
    <div style={{ maxWidth: 520, margin: "0 auto", padding: "1.5rem 1rem", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1.25rem" }}>
        <img
          src={LOGO_B64} alt="NTS Analytics"
          style={{ width: 44, height: 44, borderRadius: 8, objectFit: "cover", flexShrink: 0 }}
        />
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: 15, fontWeight: 600, margin: 0 }}>{t.appTitle}</p>
          <p style={{ fontSize: 12, color: "#888", margin: 0 }}>{t.appSubtitle}</p>
        </div>
        <LangToggle lang={lang} setLang={setLang} />
      </div>

      <div style={{ display: "flex", gap: 6, marginBottom: "1.25rem" }}>
        <button style={tabStyle(tab === "consulta")} onClick={() => setTab("consulta")}>{t.tabConsulta}</button>
        <button style={tabStyle(tab === "reparto")} onClick={() => setTab("reparto")}>{t.tabReparto}</button>
      </div>

      {tab === "consulta"
        ? <TabConsulta key={lang} lang={lang} />
        : !userData
          ? <Onboarding t={t} onConfirm={setUserData} />
          : <TabReparto
              key={lang + userData.peso + userData.comidas}
              lang={lang}
              userData={userData}
              onCambiarDatos={() => setUserData(null)}
            />
      }
    </div>
  );
}
